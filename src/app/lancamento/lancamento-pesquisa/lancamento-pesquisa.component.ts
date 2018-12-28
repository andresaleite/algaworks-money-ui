import { Component, ViewChild } from '@angular/core';
import { LancamentoService, LancamentoFiltro } from '../lancamento.service';
import {LazyLoadEvent, ConfirmationService} from 'primeng/components/common/api';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { TableRadioButton } from 'primeng/components/table/table';
import { ErroService } from 'src/app/core/erro.service';


@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css'],

})
export class LancamentoPesquisaComponent {
  filtro = new LancamentoFiltro();
  lancamentos = [];
  totalRegistros = 0;
  @ViewChild('tabela') tabela;

  constructor(
    private lancamentoService: LancamentoService,
    private toastr: ToastrService,
    private confirm: ConfirmationService,
    private erroService: ErroService
    ) {}


  consultar(pagina = 0) {
    this.filtro.paginaAtual = pagina;
    console.log(this.filtro);
    this.lancamentoService.consultar(this.filtro)
    .then(
      response => {
      this.lancamentos = response.lancamentos;
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


}
