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
   console.log(form.value);
   console.log(this.cliente);
  }
}
