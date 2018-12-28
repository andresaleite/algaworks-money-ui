import { Component, ViewChild } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
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
    private confirm: ConfirmationService ,

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

  confirmarExcluir(pessoa: any) {
    this.confirm.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
          this.excluir(pessoa.codigo);
        }
      });
    }

  excluir(codigo: number) {
    this.pessoaService.excluir(codigo).then(() => {
      this.tabela.first = 0;
      this.consultar();
      this.toastr.success('Pessoa excluída com sucesso.');
    });
  }

}
