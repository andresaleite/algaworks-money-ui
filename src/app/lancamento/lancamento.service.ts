import { Lancamento } from './../core/model';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import * as moment from 'moment/moment';

export class LancamentoFiltro {
  descricao: string;
  dataDe: Date;
  dataAte: Date;
  paginaAtual = 0;
  qtdPorPagina = 2;
}

@Injectable()
export class LancamentoService {
  url = 'http://localhost:8080/lancamentos';
  constructor(private http: Http) { }

  consultar(filtro: LancamentoFiltro): Promise<any> {
    const header = new Headers();
    const params = new  URLSearchParams();
    header.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    params.set('page', filtro.paginaAtual.toString());
    params.set('size', filtro.qtdPorPagina.toString());
    if (filtro.descricao) {
      params.set('descricao', filtro.descricao);
    }

    if (filtro.dataDe) {
      params.set('dataDe', moment(filtro.dataDe).format('YYYY-MM-DD'));
    }

    if (filtro.dataAte) {
      params.set('dataAte', moment(filtro.dataAte).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.url}?resumo`, {headers: header, search: params})
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
    .catch(
      erro => { return Promise.reject(`Erro ao consultar lançamentos.`);
    });
  }

  excluir(codigo: number): Promise<void> {
    const header = new Headers();
    header.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.delete(`${this.url}/${codigo}`, {headers: header})
    .toPromise()
    .then(response => {
      return null;
    });
  }

  novoLancamento(lancamento: Lancamento): Promise<Lancamento> {
    const header = new Headers();
    header.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    header.append('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(lancamento), {headers: header})
    .toPromise()
    .then(sucesso => {
      return sucesso.json();
    }).catch(erro => {
      return erro.json();
    });
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const header = new Headers();
    header.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    header.append('Content-Type', 'application/json');

    return this.http.put(
      `${this.url}/${lancamento.codigo}`,
      JSON.stringify(lancamento),
      {headers: header})
      .toPromise()
      .then(lanc => {
        return lanc.json();
      })
      .catch(erro => {
        return erro.json();
      });
  }

  consultarPorCodigo(codigo: number): Promise<Lancamento> {
    const header = new Headers();
    header.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.get(`${this.url}/${codigo}`,{headers: header}).toPromise()
    .then(lanc => {
      return lanc.json();
    })
    .catch(erro => {
      return erro.json();
    });
  }

  private converterStringParaData(lancamento: Lancamento) {
    lancamento.dataPagamento = moment(lancamento.dataPagamento).toDate();
    lancamento.dataVencimento = moment(lancamento.dataVencimento).toDate();

    return lancamento;
  }

}
