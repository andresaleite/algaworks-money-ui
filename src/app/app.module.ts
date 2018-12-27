import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CoreModule } from './core/core.module';
import { LancamentoService } from './lancamento/lancamento.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    LancamentoModule,
    PessoaModule,
    CoreModule

  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
