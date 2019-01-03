import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { LancamentoRoutingModule } from './lancamento-routing.module';

@NgModule({
  declarations: [
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,
    SharedModule,
    LancamentoRoutingModule
  ]
})
export class LancamentoModule { }
