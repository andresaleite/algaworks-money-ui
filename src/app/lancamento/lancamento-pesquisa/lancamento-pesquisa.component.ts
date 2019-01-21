import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import {LazyLoadEvent, ConfirmationService} from 'primeng/components/common/api';
import { ToastrService } from 'ngx-toastr';
import { ErroService } from 'src/app/core/erro.service';
import { Lancamento } from 'src/app/core/model';
import { AuthService } from 'src/app/seguranca/auth.service';


@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],

})
export class LancamentoPesquisaComponent implements OnInit {
  filtro = new LancamentoFiltro();
  lancamentos = [Lancamento];
  totalRegistros = 0;


  @ViewChild('tabela') tabela;

  constructor(
    private lancamentoService: LancamentoService,
    private toastr: ToastrService,
    private confirm: ConfirmationService,
    private erroService: ErroService,
    private titulo: Title,
    private auth: AuthService
    ) {}

  ngOnInit() {
    this.titulo.setTitle('Pesquisa de lançamentos');
  }

  consultar(pagina = 0) {
    this.filtro.paginaAtual = pagina;
    this.lancamentoService.consultar(this.filtro)
    .then(
      response => {
      this.lancamentos = response;
      this.totalRegistros = response.totalRegistros;
    })
    .catch(erro => {
      this.erroService.handle(erro);
    });
  }

  paginar(event: LazyLoadEvent ) {
    const pagina = event.first / event.rows;
    this.consultar(pagina);
  }

  confirmarExcluir(lancamento: any) {
    this.confirm.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento.codigo);
      }
    });
  }

  excluir(codigo: number) {
    this.lancamentoService.excluir(codigo).then(resp => {
      this.toastr.success('Lançamento excluído com sucesso.');
      this.tabela.first = 0;
      this.consultar();

    })
    .catch(erro => {
      this.erroService.handle(erro);
    });
  }

  permissaoRemoverLancamento() {
    return !this.auth.temPermissao('ROLE_REMOVER_LANCAMENTO');
  }

}
