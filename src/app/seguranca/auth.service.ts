import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErroService } from '../core/erro.service';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': 'Basic YW5ndWxhcjpAbmd1bEByMA==',
  'Content-Type': 'application/x-www-form-urlencoded'}),
  withCredentials: true
};

@Injectable()
export class AuthService {
  urlOauth = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  token: string;
  jwt: JwtHelperService = new JwtHelperService();

  constructor(
      private http: HttpClient,
      private erroServ: ErroService
    ) {
    }

  logar(usuario: string, senha: string): Promise<void> {
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.urlOauth, body, httpOptions).toPromise()
    .then(retorno => {
      this.armazenarToken(retorno['access_token']);
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
    localStorage.setItem('token', token);
    this.token = token;
  }

  carregarToken() {
    const token = localStorage.getItem('token');
    if (token && !this.isAccessTokenInvalido()) {
     this.armazenarToken(token);
    }
    return this;
  }

  public temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  public temQualquerPermissao(roles: any) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }
    return false;
  }

  obterNovoAccessToken(): Promise<void> {
    const body = 'grant_type=refresh_token';
    return this.http.post(this.urlOauth, body, httpOptions)
    .toPromise()
    .then(response => {
      console.log('novo token');
      this.armazenarToken(response['access_token']);
    })
    .catch(erro => {
      console.error('erro ao renovar token');
      return erro;
    });
  }

  isAccessTokenInvalido() {
    const tokenAgora = localStorage.getItem('token');
    return !tokenAgora || this.jwt.isTokenExpired(tokenAgora);
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }
}
