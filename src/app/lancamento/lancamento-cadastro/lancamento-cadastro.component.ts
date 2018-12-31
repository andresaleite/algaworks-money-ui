import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LancamentoService } from './../lancamento.service';
import { Categoria, Pessoa, Lancamento } from './../../core/model';
import { ErroService } from './../../core/erro.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { PessoaService, PessoaFiltro } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent  implements OnInit {
  categorias = new Categoria();
  pessoas = new Pessoa();
  lancamento = new Lancamento();
  tipos =  [{label: 'Receita', value: 'RECEITA'},
  {label: 'Despesa', value: 'DESPESA'}];

  constructor(
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private erroService: ErroService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.lancamento.codigo = this.route.snapshot.params['codigo'];
    this.buscarUmLancamento();
    this.buscarCategorias();
    this.buscarPessoas();

  }

  buscarCategorias() {
    this.categoriaService.listar().then(lista => {
      this.categorias = lista.map(c => ({label: c.nome, value: c.codigo}));
    }).catch(erro => this.erroService.handle(erro));
  }

  buscarPessoas() {
    const filtro = new PessoaFiltro();
    this.pessoaService.consultar(filtro, true).then(lista => {
      this.pessoas = lista.pessoas.map(p => ({label: p.nome, value: p.codigo}));
    }).catch(erro => this.erroService.handle(erro));
  }

  novoLancamento(form: FormControl) {
    this.lancamentoService.novoLancamento(this.lancamento).then(lancSucesso => {
      this.toastr.success('Lancamento criado com sucesso');
      this.router.navigate(['/lancamento', lancSucesso.codigo]);
    }).catch(erro => this.erroService.handle(erro));
  }

  buscarUmLancamento() {
    if (this.editar) {
      this.lancamentoService.consultarPorCodigo(this.lancamento.codigo)
      .then(lanc => {
        this.lancamento = lanc;
      });
    }
  }

  alterar() {
    this.lancamentoService.atualizar(this.lancamento).then(lanc => {
      this.lancamento = lanc;
      this.toastr.success('Lançamento alterado com sucesso');
    }).catch(erro => {
      this.erroService.handle(erro);
    });
  }

  salvar(form: FormControl) {
    if (this.editar) {
      this.alterar();
    } else {
      this.novoLancamento(form);
    }
  }

  get editar() {
    if (this.lancamento.codigo) {
      return true;
    } else {
      return false;
    }
  }

  novo(form: FormControl) {
    this.router.navigate(['/lancamento/novo']);

    form.reset();

    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);

  }

}
