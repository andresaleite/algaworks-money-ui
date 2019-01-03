import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SegurancaRoutingModule } from './seguranca-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

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
    FormsModule,
    SharedModule,
    SegurancaRoutingModule
  ]
})
export class SegurancaModule { }
