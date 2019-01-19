import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { AuthGuard } from '../seguranca/auth.guard';


const routes: Routes = [
  {
    path: 'pessoas',
    component: PessoaPesquisaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_PESQUISAR_PESSOA']}
  },
  {
    path: 'pessoa/nova',
    component: PessoaPesquisaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  },
  {
    path: 'pessoa/:codigo',
    component: PessoaPesquisaComponent,
    canActivate: [AuthGuard],
    data: {roles: ['ROLE_CADASTRAR_PESSOA']}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
