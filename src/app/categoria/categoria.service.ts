import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { MoneyHttp } from '../seguranca/money-http';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  httpOptions = {
    headers: new HttpHeaders(
      {'Authorization': `Bearer ${this.auth.carregarToken().token}`,
    'Content-Type': 'application/json'})
  };
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: MoneyHttp,
    private auth: AuthService) { }

  listar(): Promise<any> {
    return this.http.get2('http://localhost:8080/categorias', this.httpOptions)
    .toPromise()
    .then(resposta => {
      return resposta;
    })
    .catch(erro => {
      return erro;
    });


  }
}
