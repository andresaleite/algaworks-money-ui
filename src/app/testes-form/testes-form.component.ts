import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Cliente {
  nome: String;
  email: String;
  profissao: '';
}

@Component({
  selector: 'app-testes-form',
  templateUrl: './testes-form.component.html',
  styleUrls: ['./testes-form.component.css']
})
export class TestesFormComponent {
  cliente = new Cliente();
  profissoes = ['Programador', 'Empresario', 'Outro'];
  profissaoIncial = 'Outro';
  salvar(form: NgForm) {
   console.log(form.value);
   console.log(this.cliente);
   form.reset({profissao: ''});
  }

}
