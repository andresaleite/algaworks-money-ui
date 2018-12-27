import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LancamentoService {
  url = 'http://localhost:8080/lancamentos';
  constructor(private http: Http) { }

  consultar(): Promise<any> {
    const headers1 = new Headers();
    headers1.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.url}?resumo`, {headers: headers1})
    .toPromise()
    .then(response => response.json().content)
    .catch(erro => { return Promise.reject(`Erro ao consultar Lançamentos`);
  });
  }

}
