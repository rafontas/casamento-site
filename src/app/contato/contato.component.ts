import { Component, OnInit, NgModule } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { ColoreToolbarService } from '../colore-toolbar.service';
import { ToolBarService } from '../tool-bar/tool-bar.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  contatoEmTela : Contato = new Contato();

  constructor(private contatoService : ContatoService) { 
    ColoreToolbarService.coloreToolBar('contato');
  }

  mostraImagemFundo()  {
    ColoreToolbarService.mostraImagemFundo();
  }

  
  isNullOrEmpty(str: string): boolean {
    return (str == null || str.trim() == '');
  }

  hasTowStrings(str: string): boolean {
    var valido = true;

    valido = str.split(' ').length >= 2;

    return valido;
  }

  validaTela(): boolean {
    var valido = true;

    $('.contato-form input').removeClass('valid');
    $('.contato-form input').removeClass('invalid');

    // Nome
    if (!this.isNullOrEmpty(this.contatoEmTela.nome) &&
      this.hasTowStrings(this.contatoEmTela.nome)) {
      $('#nome-convidado').addClass('valid');
    }
    else {
      valido = false;
      $('#nome-convidado').addClass('invalid');
    }

    // E-mail
    if (!this.isNullOrEmpty(this.contatoEmTela.email) &&
         this.contatoEmTela.email.includes("@")) {
      $('#email-convidado').addClass('valid');
    }
    else {
      valido = false;
      $('#email-convidado').addClass('invalid');
    }

    // Mensagem
    if (!this.isNullOrEmpty(this.contatoEmTela.mensagem) &&
        this.contatoEmTela.mensagem.length > 10) {
      $('#mensagem').addClass('valid');
    }
    else {
      valido = false;
      $('#mensagem').addClass('invalid');
    }

    return valido;
  }

  clickEnviaContato() {

    if (!this.validaTela()) {
      new M.Toast({
        html: "Opa, falta algo.",
        displayLength: 5000,
        classes: "red lighten-1"
      });

      return;
    }
    
    ColoreToolbarService.iniciaLoading();

    this.contatoService.saveData(this.contatoEmTela)
    .pipe(finalize(() => ColoreToolbarService.finalizaLoading()))
    .subscribe( res => {
          new M.Toast({
            html: "Obrigado pelo contato!",
            displayLength: 5000,
            classes: "blue lighten-1",
          });
          this.contatoEmTela = new Contato();
        },
        error => {
          console.log(error);
          new M.Toast({
            html: "Opa, algo deu errado.",
            displayLength: 5000,
            classes: "red lighten-1"
        });
      });
  }

}
