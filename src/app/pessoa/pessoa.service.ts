import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';


export class PessoaFiltro {
  nome: string;
  paginaAtual = 0;
  qtdPorPagina = 3;

}

@Injectable()
export class PessoaService {
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: Http) { }

  consultar(filtro: PessoaFiltro): Promise<any> {
    const head = new Headers();
    const param = new URLSearchParams();

    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
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
}