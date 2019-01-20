import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErroService {

  constructor(
    private toastService: ToastrService,
    private router: Router) { }


  handle(erro: any) {
    let msg: string;
    if (typeof erro === 'string') {
      msg = erro;
    } else if (erro.erro === 'invalid_token') {
      msg = 'A sessão expirou';
      this.router.navigate(['/login']);
    } else if (erro.status >= 400 && erro.status < 500) {
      let errors;
      msg = 'Ocorreu um erro ao processar sua requisição.';
      if (erro.status === 403) {
        msg = 'Usuário sem permissão';
      }

      try {
        errors = erro.json();
        msg = errors[0].mensagemUsuario;
      } catch (e) {
        console.error('Ocorreu um erro', erro);
      }
    } else {
      msg = 'Ocorreu um erro no serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro no serviço remoto', erro);
    }
    this.toastService.error(msg);
  }

}
