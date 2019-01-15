import { ErroService } from 'src/app/core/erro.service';
import { ToastrService } from 'ngx-toastr';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Pessoa } from 'src/app/core/model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {
  pessoa = new Pessoa();

  constructor(
    private pessoaService:  PessoaService,
    private toastrService:  ToastrService ,
    private erroService:  ErroService,
    private route: ActivatedRoute,
    private router: Router,
    private titulo: Title
  ) { }

  ngOnInit() {
    this.pessoa.codigo = this.route.snapshot.params['codigo'];
    this.titulo.setTitle( `Cadastrar Pessoa`);
    if (this.editar) {
      this.consultarPessoa();
    }
  }

  salvar(ngForm: FormControl) {
    if (this.editar) {
      this.alterarPessoa();
    } else {
      this.novaPessoa(ngForm);
    }
  }


  novaPessoa(ngForm: FormControl) {

    this.pessoaService.novaPessoa(this.pessoa)
      .then(resposta => {
        this.toastrService.success('Pessoa cadastrada com sucesso');
        this.router.navigate(['/pessoa', resposta.codigo]);
      }).catch(erro => {
        this.erroService.handle(erro);
      });
  }

  consultarPessoa() {
    this.pessoaService.consultarPessoaPorCodigo(this.pessoa.codigo).then(pessoa => {
      this.pessoa = pessoa;
      this.titulo.setTitle( `Alterar Pessoa ${pessoa.nome}`);
    }).catch(erro => {
      this.erroService.handle(erro);
    });
  }

  alterarPessoa() {
    this.pessoaService.alterarPessoa(this.pessoa)
    .then(pessoa => {
      this.pessoa = pessoa;
      this.toastrService.success('Pessoa alterada com sucesso.');
    })
    .catch(erro => {
      this.erroService.handle(erro);
    });
  }

  get editar() {
    return this.pessoa.codigo !== undefined ? true : false;
  }

  novo(form: FormControl) {
    this.router.navigate(['/pessoa/novo']);

    form.reset();

    setTimeout(function() {
      this.pessoa = new Pessoa();
    }.bind(this), 1);

  }
}
