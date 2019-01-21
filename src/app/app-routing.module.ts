import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentoPesquisaComponent } from './lancamento/lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamento/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa/pessoa-cadastro/pessoa-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const routes: Routes = [
  {path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'}
];

/*
const routes: Routes = [
  {path: 'lancamentos', loadChildren: '/lancamento/lancamento.module#LancamentoModule'},
  {path: 'pessoas', loadChildren: 'pessoa/pessoa.module#PessoaModule'},

  {path: '', redirectTo: 'lancamentos', pathMatch: 'full' },
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
