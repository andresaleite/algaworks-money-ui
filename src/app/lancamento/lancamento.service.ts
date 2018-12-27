import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as moment from 'moment/moment';

export interface LancamentoFiltro {
  descricao: string;
  dataDe: Date;
  dataAte: Date;
}

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

    if (filtro.dataDe) {
      params.set('dataDe', moment(filtro.dataDe).format('YYYY-MM-DD'));
    }

    if (filtro.dataAte) {
      params.set('dataAte', moment(filtro.dataAte).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.url}?resumo`, {headers: headers1, search: params})
    .toPromise()
    .then(response => response.json().content)
    .catch(erro => { return Promise.reject(`Erro ao consultar Lançamentos`);
  });
  }

}
