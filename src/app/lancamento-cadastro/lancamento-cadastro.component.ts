import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesa', value: 'DESPESA'}
  ];

  categorias = [
    {label: 'Alimentacao', value: 1},
    {label: 'Transporte', value: 2}
  ];
  pessoas = [
    {label: 'João de Tal', value: 1},
    {label: 'Sebastião  tiao', value: 2},
    {label: 'Maria Abadia', value: 3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
