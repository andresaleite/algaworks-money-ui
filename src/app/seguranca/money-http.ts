import { Injectable} from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, from } from 'rxjs';

@Injectable()
export class MoneyHttp extends HttpClient {

    constructor(handler: HttpHandler, private auth: AuthService) {
        super(handler);
    }

    public delete2(url: string, options: any): Observable<Response> {
        return this.fazerRequisicao(() => super.delete(url, options));
    }

    get2(url: string, options: any, param?: string): Observable<Response> {
        return this.fazerRequisicao(() => super.get(url, options));
   }

   post2(url: string, body: any | null, options: any): Observable<Response> {
       return this.fazerRequisicao(() => super.post(url, options, body));
   }

   put2(url: string, body: any | null, options: any): Observable<Response> {
       return this.fazerRequisicao(() => super.put(url, body, options));
   }

    private fazerRequisicao(fn: Function): Observable<Response> {
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Obter novo token');
           this.auth.obterNovoAccessToken().then(() => {
                return from(this.fazerRequisicao(fn));
            });
        } else {
            return from(fn());
        }
    }

}
