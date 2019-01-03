import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: string;
  senha: string;
  constructor(
    private titulo: Title,
    private authSevice: AuthService) { }

  ngOnInit() {
    this.titulo.setTitle('Login');
  }

  logar(form: FormControl) {
    this.authSevice.logar(this.email, this.senha).then(sucesso => {

    });
  }
}
