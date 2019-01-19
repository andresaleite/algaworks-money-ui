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
import { SegurancaModule } from './seguranca/seguranca.module';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const rotas: Routes = [
   {path: '', redirectTo: 'login', pathMatch: 'full' },
   {path: 'nao-autorizado', component: NaoAutorizadoComponent},
   {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
   {path: '**', redirectTo: 'pagina-nao-encontrada'}
 ];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(rotas),

    LancamentoModule,
    PessoaModule,
    CoreModule,
    SegurancaModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
