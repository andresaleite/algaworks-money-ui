import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento/lancamento-pesquisa/lancamento-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 const rotas: Routes = [
   {path: 'lancamentos', component: LancamentoPesquisaComponent},
   {path: 'lancamento/novo', component: LancamentoCadastroComponent},
   {path: 'lancamento/:codigo', component: LancamentoCadastroComponent},
   {path: 'pessoas', component: PessoaPesquisaComponent},
   {path: 'pessoa/nova', component: PessoaCadastroComponent},
   {path: 'pessoa/:codigo', component: PessoaCadastroComponent}
 ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(rotas),

    LancamentoModule,
    PessoaModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
