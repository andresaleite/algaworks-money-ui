import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: String;
  email: String;
  profissao: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cliente = new Cliente;
  profissoes = ['Programador', 'Empresario', 'Outro'];
  profissaoIncial = 'Outro';
  salvar(form: NgForm) {
   this.cliente.nome = form.value.primeiroNome;
   //this.cliente.email = form.value.email;
   this.cliente.profissao = form.value.profissao;

   console.log(form.value);
   console.log(this.cliente);
  }
}
