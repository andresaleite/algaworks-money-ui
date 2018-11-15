import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

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

