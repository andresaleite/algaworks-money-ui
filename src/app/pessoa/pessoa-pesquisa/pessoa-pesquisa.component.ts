import { Component } from '@angular/core';
import { PessoaService, PessoaFiltro } from '../pessoa.service';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {
  pessoas = [];
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  constructor(private pessoaService: PessoaService) {}


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

}
