import { Component } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import {LazyLoadEvent} from 'primeng/components/common/api';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],

})
export class LancamentoPesquisaComponent {
  filtro = new LancamentoFiltro();
  lancamentos = [];
  totalRegistros = 0;

  constructor(private lancamentoService: LancamentoService) { }

  consultar(pagina = 0) {
    this.filtro.paginaAtual = pagina;
    console.log(this.filtro);
    this.lancamentoService.consultar(this.filtro).then(response => {
      this.lancamentos = response.lancamentos;
      this.totalRegistros = response.totalRegistros;
    });
  }

  paginar(event: LazyLoadEvent ) {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }


}
