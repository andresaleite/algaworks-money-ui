import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  urlOauth = 'http://localhost:8080/oauth/token';
  constructor(private http: Http) { }

  logar(usuario: string, senha: string): Promise<void> {
    const head = new Headers();
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    head.append('Content-Type', 'application/x-www-form-urlencoded');
    head.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');


    return this.http.post(this.urlOauth, body, { headers: head }).toPromise()
    .then(retorno => {
      console.log(retorno);
      return null;
    }).catch(erro => {
      console.log(erro);
      return erro;
    });
  }
}
