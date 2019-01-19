import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  httpOptions = {
    headers: new HttpHeaders(
      {'Authorization': `Bearer ${this.auth.carregarToken().token}`,
    'Content-Type': 'application/x-www-form-urlencoded'})
  };
  urlPadrao = 'http://localhost:8080/pessoas';
  constructor(private http: HttpClient,
    private auth: AuthService) { }

  listar(): Promise<any> {
    return this.http.get('http://localhost:8080/categorias', this.httpOptions)
    .toPromise()
    .then(resposta => {
      return resposta;
    })
    .catch(erro => {
      return erro;
    });


  }
}
