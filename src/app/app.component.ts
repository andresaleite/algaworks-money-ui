import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  profissoes = ['Programador', 'Empresario', 'Outro'];
  profissaoIncial = 'Outro';
  salvar(form: NgForm) {
    console.log('salvando');
    console.log(this.profissaoIncial);
    console.log(form.value.profissao);
  }
}
