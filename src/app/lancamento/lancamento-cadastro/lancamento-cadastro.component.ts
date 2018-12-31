import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LancamentoService, LancamentoFiltro } from './../lancamento.service';
import { Categoria, Pessoa, Lancamento } from './../../core/model';
import { ErroService } from './../../core/erro.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { PessoaService, PessoaFiltro } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute } from '@angular/router';

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
    private router: ActivatedRoute) {}

  ngOnInit() {
    // if (this.router.snapshot.params['codigo']) {
    //   const lancamentoFiltro = new LancamentoFiltro();
    //   lancamentoFiltro.codigo =  this.router.snapshot.params['codigo'];
    //   this.lancamentoService.consultar()
    // }
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
    console.log(this.lancamento);   console.log(`ssss`);
    this.lancamentoService.novoLancamento(this.lancamento).then(sucesso => {
      this.toastr.success('Lancamento criado com sucesso');
    }).catch(erro => this.erroService.handle(erro));
  }

}
