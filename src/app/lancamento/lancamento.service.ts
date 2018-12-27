import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { LancamentoFiltro } from './lancamento-pesquisa/lancamento-pesquisa.component';

@Injectable()
export class LancamentoService {
  url = 'http://localhost:8080/lancamentos';
  constructor(private http: Http) { }

  consultar(filtro: LancamentoFiltro): Promise<any> {
    const headers1 = new Headers();
    const params = new  URLSearchParams();
    headers1.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.url}?resumo`, {headers: headers1, search: params})
    .toPromise()
    .then(response => response.json().content)
    .catch(erro => { return Promise.reject(`Erro ao consultar Lançamentos`);
  });
  }

}
