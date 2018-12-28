import { Component, ViewChild } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [];
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  @ViewChild('tabela') tabela;
  constructor(
    private pessoaService: PessoaService,
    private toastr: ToastrService ,
    ) {}


  consultar(pagina = 0) {
    this.filtro.paginaAtual = pagina;
    this.pessoaService.consultar(this.filtro).then(resposta => {
      this.pessoas = resposta.pessoas;
      this.totalRegistros = resposta.totalRegistros;
    });

  }

  paginar(event: LazyLoadEvent) {
   const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo).then(() => {
      this.tabela.first = 0;
      this.consultar();

      this.toastr.success('Pessoa excluída com sucesso.');
    });
  }

}
