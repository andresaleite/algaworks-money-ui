import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],

})
export class LancamentoPesquisaComponent  implements OnInit {
  filtro = new LancamentoFiltro();
  lancamentos = [];
  totalRegistros = 0;
  constructor(private lancamentoService: LancamentoService) { }
  ngOnInit() {
    this.consultar();
  }

  consultar() {
    console.log(this.filtro);
    this.lancamentoService.consultar(this.filtro).then(response => {
      this.lancamentos = response.lancamentos;
      this.totalRegistros = response.totalRegistros;
    });
  }


}
