import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmaPresencaComponent } from './confirma-presenca/confirma-presenca.component';
import { PresentesComponent } from './presentes/presentes.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CasamentoComponent } from './casamento/casamento.component';
import { ContatoComponent } from './contato/contato.component';
import { PagNaoEncontradaComponent } from './pag-nao-encontrada/pag-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'confirmar', component: ConfirmaPresencaComponent },
  { path: 'presentes', component: PresentesComponent },
  { path: 'fotos', component: GaleriaComponent },
  { path: 'casamento', component: CasamentoComponent },
  { path: 'contato', component: ContatoComponent },
  // { path: 'jogo', component: ContatoComponent },
  { path: '**',  component:  PagNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
