import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthService } from '../seguranca/auth.service';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  urlPadrao: string;
  constructor(private http: MoneyHttp,
    private auth: AuthService) {
      this.urlPadrao = `${environment.apiUrl}/categorias`;
    }

  listar(): Promise<any> {
    return this.http.get(this.urlPadrao, {})
    .toPromise()
    .then(resposta => {
      return resposta;
    })
    .catch(erro => {
      return erro;
    });


  }
}
