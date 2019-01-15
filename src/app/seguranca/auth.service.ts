import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {
  urlOauth = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: Http,
    private jwt: JwtHelperService) {
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
      if (erro.status === 400) {
        const erroJson = erro.json();
        if (erroJson.error === 'invalid_grant') {
          return Promise.reject('Usuário ou senha inválida.');
        }
      }
      return Promise.reject(erro);
    });
  }
  armazenarToken(token: string) {
    this.jwtPayload = this.jwt.decodeToken(token);
    localStorage.setItem('access_token', token);
  }

  carregarToken() {
    const token = localStorage.getItem('access_token');

    if (token) {
      this.armazenarToken(token);
    }
  }
}