import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../seguranca/auth.service';
import { MoneyHttp } from '../seguranca/money-http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: MoneyHttp,
    private auth: AuthService) { }

  listar(): Promise<any> {
    return this.http.get('http://localhost:8080/categorias', {})
    .toPromise()
    .then(resposta => {
      return resposta;
    })
    .catch(erro => {
      return erro;
    });


  }
}
