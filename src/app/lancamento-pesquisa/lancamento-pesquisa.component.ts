import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent  {
  lancamentos = [
    {
      tipo: 'DESPESA',
    descricao: 'Compra de pão',
    dataVencimento: new Date(2018, 11, 4),
    dataPagamento: null,
    valor: 4.55,
    pessoa: 'Padaria do Zé'
  },

    {tipo: 'DESPESA',
    descricao: 'Mensalidade escola',
    dataVencimento: new Date(2018, 11, 4),
    dataPagamento: new Date(2018, 11, 1),
    valor: 8.55,
    pessoa: 'BsB tal'
  },
    {tipo: 'RECEITA',
    descricao: 'Esporte Isadora',
    dataVencimento: new Date(2018, 12, 10),
    dataPagamento: null,
    valor: 205,
    pessoa: 'Ballet'},
    {tipo: 'DESPESA',
    descricao: 'Esporte Guilherme',
    dataVencimento: new Date(2018, 11, 10),
    dataPagamento: null,
    valor: 120,
    pessoa: 'Futebol'},
    {tipo: 'RECEITA',
    descricao: 'Salário mensal',
    dataVencimento: new Date(2018, 11, 4),
    dataPagamento: null,
    valor: 8600.55,
    pessoa: 'Stefanini'},
    {tipo: 'DESPESA',
    descricao: 'Doméstica',
    dataVencimento: new Date(2018, 11, 4),
    dataPagamento: '15/11/2018',
    valor: 120,
    pessoa: 'Suely'}
  ];

}
