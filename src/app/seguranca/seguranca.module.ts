import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';

import { SegurancaRoutingModule } from './seguranca-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

export function jwtOptionsFactory(authService) {
  return {
    tokenGetter: () => {
      return authService.carregarToken();
    }
  };
}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    SharedModule,
    SegurancaRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [AuthService]
      }
    })
  ],
  providers: [AuthService]
})

export class SegurancaModule { }


