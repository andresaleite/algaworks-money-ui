import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { PessoaService, PessoaFiltro } from 'src/app/pessoa/pessoa.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent  implements OnInit {
  categorias = [];
  tipos = [];
  pessoas = [];

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService) {}

  ngOnInit() {
    this.buscarCategorias();
    this.buscarPessoas();
  }

  buscarCategorias() {
    this.categoriaService.listar().then(lista => {
      this.categorias = lista;
    });
  }

  buscarPessoas() {
    const filtro = new PessoaFiltro();
    this.pessoaService.consultar(filtro, true).then(lista => {
      this.pessoas = lista.pessoas;
    });
  }





}
