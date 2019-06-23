import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmaPresencaComponent } from './confirma-presenca/confirma-presenca.component';
import { PresentesComponent } from './presentes/presentes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CasamentoComponent } from './casamento/casamento.component';
import { ContatoComponent } from './contato/contato.component';
import { PagNaoEncontradaComponent } from './pag-nao-encontrada/pag-nao-encontrada.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
// import { MaterializeModule } from "angular2-materialize";


@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    HomeComponent,
    ConfirmaPresencaComponent,
    PresentesComponent,
    GaleriaComponent,
    CasamentoComponent,
    ContatoComponent,
    PagNaoEncontradaComponent,
    FooterCompComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    // MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
