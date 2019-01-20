import { Injectable} from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, from } from 'rxjs';
import { ErroService } from '../core/erro.service';

@Injectable()
export class MoneyHttp extends HttpClient {
    constructor(handler: HttpHandler, private auth: AuthService, private erro: ErroService) {
        super(handler);
    }

    public delete(url: string): Observable<any> {
        const  httpOp = this.fazerRequisicao();
        return super.delete(url, httpOp);
    }

    get(url: string, options: any, param?: string): Observable<any> {
        const  httpOp = this.fazerRequisicao();
        return super.get(url, httpOp);
   }

   post(url: string, body: any | null): Observable<any> {
        const  httpOp = this.fazerRequisicao();
        return super.post(url, httpOp, body);
   }

   put(url: string, body: any | null): Observable<any> {
        const  httpOp = this.fazerRequisicao();
        return super.put(url, body, httpOp);
   }

    private fazerRequisicao() {
        if (this.auth.isAccessTokenInvalido()) {
            console.log('Obter novo token');
           this.auth.obterNovoAccessToken().then(() => {
               if (this.auth.isAccessTokenInvalido()) {
                this.erro.handle({erro: 'invalid_token'});
                return {};
               }
            });
        }
        const resp = {
            headers: new HttpHeaders(
              {'Authorization': `Bearer ${this.auth.token}`,
            'Content-Type': 'application/json'}), withCredentials: true
          };
        return resp;
    }

}
