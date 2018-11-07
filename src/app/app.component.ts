import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '15/08/2017', dataPagamento: null, valor: 4.55, pessoa: 'Padaria do Zé'},
    {tipo: 'DESPESA', descricao: 'Mensalidade escola', dataVencimento: '10/06/2018', dataPagamento: '15/11/2018', valor: 8.55,
      pessoa: 'BsB tal'},
    {tipo: 'RECEITA', descricao: 'Esporte Isadora', dataVencimento: '15/09/2017', dataPagamento: null, valor: 205, pessoa: 'Ballet'},
    {tipo: 'DESPESA', descricao: 'Esporte Guilherme', dataVencimento: '15/03/2017', dataPagamento: null, valor: 120, pessoa: 'Futebol'},
    {tipo: 'RECEITA', descricao: 'Salário mensal', dataVencimento: '15/01/2017', dataPagamento: null, valor: 8600.55, pessoa: 'Stefanini'},
    {tipo: 'DESPESA', descricao: 'Doméstica', dataVencimento: '15/07/2017', dataPagamento: '15/11/2018', valor: 120, pessoa: 'Suely'}
  ];
}
