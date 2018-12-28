import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CoreModule } from './core/core.module';
import { LancamentoService } from './lancamento/lancamento.service';
import { PessoaService } from './pessoa/pessoa.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService } from 'primeng/components/common/api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot(),
    ConfirmDialogModule,

    LancamentoModule,
    PessoaModule,
    CoreModule,


  ],
  providers: [LancamentoService, PessoaService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
