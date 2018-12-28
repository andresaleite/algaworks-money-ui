import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';

import { LancamentoService } from '../lancamento/lancamento.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErroService } from './erro.service';


@NgModule({
  declarations: [
    NavbarComponent

  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    ToastrModule,
    ConfirmDialogModule
  ],
  providers: [
    ErroService,
    LancamentoService,
    PessoaService,
    ConfirmationService,
    {
      provide: LOCALE_ID, useValue: 'pt'
    }]
})
export class CoreModule { }
