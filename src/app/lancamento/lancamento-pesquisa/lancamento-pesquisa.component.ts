import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  implements OnInit {
  lancamentos = [];

  constructor(private lancamentoService: LancamentoService) { }
  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.lancamentoService.consultar().then(response => {
      this.lancamentos = response;
    });
  }


}
