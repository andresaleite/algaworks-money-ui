import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/components/table/table';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormsModule } from '@angular/forms';
import { TestesFormComponent } from './testes-form/testes-form.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoPesquisaComponent,
    NavbarComponent,
    PessoaPesquisaComponent,
    CampoColoridoDirective,
    TestesFormComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    TableModule,
    FormsModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
