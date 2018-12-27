import { Component, OnInit } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],

})
export class LancamentoPesquisaComponent  implements OnInit {
  lancamentos = [];
  descricao: string;
  dataDe: Date;
  dataAte: Date;

  constructor(private lancamentoService: LancamentoService) { }
  ngOnInit() {
    this.consultar();
  }

  consultar() {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataDe: this.dataDe,
      dataAte: this.dataAte
    };
    console.log(filtro);
    this.lancamentoService.consultar(filtro).then(response => {
      this.lancamentos = response;
    });
  }


}
