import { Lancamento } from './../core/model';
import { Injectable, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import * as moment from 'moment/moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tokenGetter } from '../seguranca/seguranca.module';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': `Bearer ${tokenGetter()}`,
  'Content-Type': 'application/x-www-form-urlencoded'})
};


export class LancamentoFiltro {
  descricao: string;
  dataDe: Date;
  dataAte: Date;
  paginaAtual = 0;
  qtdPorPagina = 8;
}

@Injectable()
export class LancamentoService implements OnInit {
  url = 'http://localhost:8080/lancamentos';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    tokenGetter();
  }

  consultar(filtro: LancamentoFiltro): Promise<any> {
    const params = new  URLSearchParams();
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

    return this.http.get<Lancamento>(`${this.url}?resumo&${params}`, httpOptions)
    .toPromise()
    .then(resultado => {
      return resultado['content'];
    })
    .catch(
      erro => { return Promise.reject(`Erro ao consultar lançamentos.`);
    });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.url}/${codigo}`, httpOptions)
    .toPromise()
    .then(response => {
      return null;
    });
  }

  novoLancamento(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post(this.url, JSON.stringify(lancamento), httpOptions)
    .toPromise()
    .then(sucesso => {
      return sucesso;
    }).catch(erro => {
      return erro.json();
    });
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.put<Lancamento>(
      `${this.url}/${lancamento.codigo}`,
      JSON.stringify(lancamento), httpOptions)
      .toPromise()
      .then(lanc => {
        const retorno: Lancamento = this.converterStringParaData(lanc);
        return retorno;
      })
      .catch(erro => {
        return erro.json();
      });
  }

  consultarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get<Lancamento>(`${this.url}/${codigo}`, httpOptions).toPromise()
    .then(lanc => {
      const retorno: Lancamento = this.converterStringParaData(lanc);
      return retorno;
    })
    .catch(erro => {
      return erro.json();
    });
  }

  private converterStringParaData(lancamento: Lancamento) {
    if (lancamento.dataPagamento) {
      lancamento.dataPagamento = moment(lancamento.dataPagamento).toDate();
    }
    lancamento.dataVencimento = moment(lancamento.dataVencimento).toDate();

    return lancamento;
  }

}
