import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as moment from 'moment/moment';

export class LancamentoFiltro {
  descricao: string;
  dataDe: Date;
  dataAte: Date;
  pagina = 0;
  tamanho = 3;
}

@Injectable()
export class LancamentoService {
  url = 'http://localhost:8080/lancamentos';
  constructor(private http: Http) { }

  consultar(filtro: LancamentoFiltro): Promise<any> {
    const headers1 = new Headers();
    const params = new  URLSearchParams();
    headers1.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.tamanho.toString());
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
    .then(response => {
      const tudo = response.json();
      const lancamentos = tudo.content;
      const resultado = {
        lancamentos: lancamentos,
        totalRegistros: tudo.totalElements
      };

      return resultado;

    })
    .catch(erro => { return Promise.reject(`Erro ao consultar Lançamentos`);
  });
  }

}
