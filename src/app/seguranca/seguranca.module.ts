import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';

import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    SharedModule,
    SegurancaRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://localhost:4200/login'],
        blacklistedRoutes: [
          'http://localhost:4200/lancamentos',
          'http://localhost:4200/lancamento',
          'http://localhost:4200/pessoas',
          'http://localhost:4200/pessoa']
      }
    })
  ]
})
export class SegurancaModule { }
