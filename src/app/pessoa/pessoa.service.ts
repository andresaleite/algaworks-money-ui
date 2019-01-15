import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Pessoa } from '../core/model';
import { tokenGetter } from '../seguranca/seguranca.module';

const httpOptions = {
  headers: new HttpHeaders({'Authorization': `Bearer ${tokenGetter()}`,
  'Content-Type': 'application/x-www-form-urlencoded'})
};

export class PessoaFiltro {
  nome: string;
  paginaAtual = 0;
  qtdPorPagina = 5;

}

@Injectable()
export class PessoaService {
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: HttpClient) { }

  consultar(filtro: PessoaFiltro, todos: boolean): Promise<any> {
    const param = new URLSearchParams();

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


    return this.http.get<Pessoa>(`${this.urlPadrao}?resumo`, httpOptions)
    .toPromise()
    .then(response => {
      return response['content'];
    });
  }


  excluir(codigo: number): Promise<void> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.urlPadrao}/${codigo}`, httpOptions)
    .toPromise()
    .then(() => null);
  }

  mudarStatus(pessoa: any): Promise<string> {

    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}/ativo`, JSON.stringify(!pessoa.ativo), httpOptions)
    .toPromise()
    .then(() => 'O status foi alterado com sucesso.')
    .catch(erro => {
      return erro;
    });
  }

  novaPessoa(pessoa: Pessoa): Promise<any> {
    pessoa.ativo = true;
      return this.http.post(
        this.urlPadrao, JSON.stringify(pessoa),
        httpOptions)
        .toPromise()
        .then(resposta => {
          return resposta;
        })
        .catch(erro => {
          return erro;
        });
  }

  consultarPessoaPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.urlPadrao}/${codigo}`, httpOptions).toPromise()
    .then(resposta => {
      return resposta;
    }).catch(erro => {
      return erro;
    });
  }

  alterarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}`, JSON.stringify(pessoa), httpOptions).toPromise()
    .then(resposta => {
      return resposta['content'];
    }).catch(erro => {
      return erro;
    });
  }
}
