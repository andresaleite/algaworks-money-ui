import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErroService {

  constructor(private toastService: ToastrService) { }


  handle(erro: any) {
    let msg: string;
    if (erro.status >= 400 && erro.status < 500) {
      let json: any;
      json = JSON.parse(erro._body);
      msg = json[0].mensagemUsuario;
      console.log(json[0].mensagemDesenvolvedor);
    } else {
      msg = 'Ocorreu um erro. Tente novamente!';
    }
    this.toastService.error(msg);
  }

}
