import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

export interface LancamentoFiltro{
  descricao: string;
}

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  implements OnInit {
  lancamentos = [];
  descricao: string;
  constructor(private lancamentoService: LancamentoService) { }
  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.lancamentoService.consultar({descricao: this.descricao}).then(response => {
      this.lancamentos = response;
    });
  }


}
