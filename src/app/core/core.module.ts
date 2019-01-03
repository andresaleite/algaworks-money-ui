import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/api';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';

import { LancamentoService } from '../lancamento/lancamento.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErroService } from './erro.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { AuthService } from '../seguranca/auth.service';


@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    ConfirmDialogModule
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
    AuthService,

    JwtHelper,
    Title,
    ConfirmationService,
    {
      provide: LOCALE_ID, useValue: 'pt'
    }]
})
export class CoreModule { }
