import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { Pessoa } from '../core/model';
import { AuthService } from '../seguranca/auth.service';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from 'src/environments/environment.prod';

export class PessoaFiltro {
  nome: string;
  paginaAtual = 0;
  qtdPorPagina = 5;

}

@Injectable()
export class PessoaService {

  urlPadrao: string;
  constructor(
    private http: MoneyHttp,
    private auth: AuthService) {
      this.urlPadrao = `${environment.apiUrl}/pessoas`;
    }

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


    return this.http.get(`${this.urlPadrao}?resumo`, {})
    .toPromise()
    .then(response => {
      return response['content'];
    });
  }


  excluir(codigo: number): Promise<void> {
    const head = new Headers();
    head.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.http.delete(`${this.urlPadrao}/${codigo}`)
    .toPromise()
    .then(() => null);
  }

  mudarStatus(pessoa: any): Promise<string> {

    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}/ativo`, JSON.stringify(!pessoa.ativo))
    .toPromise()
    .then(() => 'O status foi alterado com sucesso.')
    .catch(erro => {
      return erro;
    });
  }

  novaPessoa(pessoa: Pessoa): Promise<any> {
    pessoa.ativo = true;
      return this.http.post(
        this.urlPadrao, JSON.stringify(pessoa))
        .toPromise()
        .then(resposta => {
          return resposta;
        })
        .catch(erro => {
          return erro;
        });
  }

  consultarPessoaPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get(`${this.urlPadrao}/${codigo}`, {}).toPromise()
    .then(resposta => {
      return resposta;
    }).catch(erro => {
      return erro;
    });
  }

  alterarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.put(`${this.urlPadrao}/${pessoa.codigo}`, JSON.stringify(pessoa)).toPromise()
    .then(resposta => {
      return resposta;
    }).catch(erro => {
      return erro;
    });
  }
}
