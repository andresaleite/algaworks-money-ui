import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { toUnicode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: Http) { }

  listar(): Promise<any> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get('http://localhost:8080/categorias', {headers: head})
    .toPromise()
    .then(resposta => {
      return resposta.json();
    })
    .catch(erro => {
      return erro;
    });


  }
}
