import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Pessoa } from '../core/model';


export class PessoaFiltro {
  nome: string;
  paginaAtual = 0;
  qtdPorPagina = 5;

}

@Injectable()
export class PessoaService {
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: Http) { }

  consultar(filtro: PessoaFiltro, todos: boolean): Promise<any> {
    const head = new Headers();
    const param = new URLSearchParams();

    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    if (todos) {
      filtro.qtdPorPagina =  0;
    }
    if (filtro.nome) {
      param.set('nome', filtro.nome);
    }
    if (filtro.paginaAtual) {
      param.set('page', filtro.paginaAtual.toString());
    }
    if (filtro.qtdPorPagina) {
      param.set('size', filtro.qtdPorPagina.toString());
    }


    return this.http.get(`${this.urlPadrao}?resumo`, {headers: head, search: param})
    .toPromise()
    .then(response => {
      const tudo = response.json();
      const pessoas = tudo.content;
      const resultado = {
        pessoas: pessoas,
        totalRegistros: tudo.totalElements
      };

      return resultado;

    });
  }


  excluir(codigo: number): Promise<void> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.urlPadrao}/${codigo}`, {headers: head})
    .toPromise()
    .then(() => null);
  }

  mudarStatus(pessoa: any): Promise<string> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    head.append('Content-Type', 'application/json');

    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}/ativo`, JSON.stringify(!pessoa.ativo), {headers: head})
    .toPromise()
    .then(() => 'O status foi alterado com sucesso.')
    .catch(erro => {
      return erro;
    });
  }

  novaPessoa(pessoa: Pessoa): Promise<any> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    head.append('Content-Type', 'application/json');
    pessoa.ativo = true;
      return this.http.post(
        this.urlPadrao, JSON.stringify(pessoa),
        {headers: head})
        .toPromise()
        .then(resposta => {
          return resposta.json();
        })
        .catch(erro => {
          return erro.json();
        });
  }

  consultarPessoaPorCodigo(codigo: number): Promise<Pessoa> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.urlPadrao}/${codigo}`, {headers: head}).toPromise()
    .then(resposta => {
      return resposta.json();
    }).catch(erro => {
      return erro.json();
    });
  }

  alterarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    head.append('Content-Type', 'application/json');
    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}`, JSON.stringify(pessoa), {headers: head}).toPromise()
    .then(resposta => {
      return resposta.json();
    }).catch(erro => {
      return erro();
    });
  }
}
