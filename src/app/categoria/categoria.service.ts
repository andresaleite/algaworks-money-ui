import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    /*'Authorization': `Bearer ${tokenGetter()}`,*/
  'Content-Type': 'application/x-www-form-urlencoded'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get('http://localhost:8080/categorias', httpOptions)
    .toPromise()
    .then(resposta => {
      return resposta;
    })
    .catch(erro => {
      return erro;
    });


  }
}
