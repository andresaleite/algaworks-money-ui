import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ErroService } from 'src/app/core/erro.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // email: string;
  // senha: string;
   email = 'admin@algamoney.com';
   senha = 'admin';
  constructor(
    private titulo: Title,
    private authSevice: AuthService,
    private erroHandle: ErroService,
    private router: Router) { }

  ngOnInit() {
    this.titulo.setTitle('Login');
  }

  logar(form: FormControl) {
    this.authSevice.logar(this.email, this.senha).then(sucesso => {
      this.router.navigate(['/lancamentos']);
    }).catch(erro => this.erroHandle.handle(erro) );
    this.senha = '';
  }
}
