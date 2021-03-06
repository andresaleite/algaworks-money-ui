import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { TableModule } from 'primeng/components/table/table';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { PessoaRoutingModule } from './pessoa-routing.module';

@NgModule({
  declarations: [
    PessoaCadastroComponent,
    PessoaPesquisaComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    FormsModule,
    SharedModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
