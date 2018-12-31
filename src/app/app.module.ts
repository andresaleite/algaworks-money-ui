import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { LancamentoModule } from './lancamento/lancamento.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CoreModule } from './core/core.module';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';

const rotas: Routes = [
   {path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
   {path: 'pessoas', component: PessoaPesquisaComponent},
   {path: 'pessoa/nova', component: PessoaCadastroComponent},
   {path: 'pessoa/:codigo', component: PessoaCadastroComponent},
   {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
   {path: '**', redirectTo: 'pagina-nao-encontrada'}
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
