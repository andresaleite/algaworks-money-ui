import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {
  urlOauth = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwt: JwtHelper) {
      this.carregarToken();
    }

  logar(usuario: string, senha: string): Promise<void> {
    const head = new Headers();
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    head.append('Content-Type', 'application/x-www-form-urlencoded');
    head.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');


    return this.http.post(this.urlOauth, body, { headers: head }).toPromise()
    .then(retorno => {
      console.log(retorno);
      this.armazenarToken(retorno.json().access_token);
      return null;
    }).catch(erro => {
      console.log(erro);
      return erro;
    });
  }
  armazenarToken(token: string) {
    this.jwtPayload = this.jwt.decodeToken(token);
    localStorage.setItem('token', token);
  }

  carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }
}
