import { ErroService } from 'src/app/core/erro.service';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from 'src/app/core/model';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent {
  pessoa = new Pessoa();

  constructor(
    private pessoaService:  PessoaService,
    private toastrService:  ToastrService ,
    private erroService:  ErroService
  ) { }


  novaPessoa(ngForm: NgForm) {

    this.pessoaService.novaPessoa(this.pessoa)
      .then(resposta => {
        this.toastrService.success('Pessoa cadastrada com sucesso');
      }).catch(erro => {
        this.erroService.handle(erro);
      });
  }
}
