import { HttpClientModule, HttpHandler } from '@angular/common/http';
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
import { MoneyHttp } from './money-http';
import { AuthGuard } from './auth.guard';

export function jwtOptionsFactory(httpHandler: HttpHandler, authService: AuthService ) {
  return {
    tokenGetter: () => {
      return new MoneyHttp(httpHandler, authService);
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
        deps: [HttpHandler, AuthService]
      }
    })
  ],
  providers: [AuthService, MoneyHttp, AuthGuard]
})

export class SegurancaModule { }


