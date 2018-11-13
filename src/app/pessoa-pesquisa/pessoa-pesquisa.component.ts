import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent  {
  pessoas = [
    {nome: 'Manoel Pinheiro', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false},
    {nome: 'Jair Bolsonaro', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'Carla Paz', cidade: 'Machacalis', estado: 'MG', ativo: true},
    {nome: 'Sérgio Daniel', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'Vilmar Andrade', cidade: 'Fortaleza', estado: 'CE', ativo: false},
    {nome: 'Isadora Prates', cidade: 'Brasília', estado: 'DF', ativo: true},
    {nome: 'Aline Menezes', cidade: 'Fortaleza', estado: 'CE', ativo: true},
    {nome: 'Maria Neuza Lopes Maciel', cidade: 'Fortaleza', estado: 'CE', ativo: true}
  ];
}
