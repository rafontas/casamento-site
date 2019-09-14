import { Component, OnInit, NgModule } from '@angular/core';
import { ConfirmaPresenca } from './confirma-presenca';
import { ConfirmaPresencaService } from './confirma-presenca-service';
import { stringify } from '@angular/compiler/src/util';
import { ColoreToolbarService } from '../colore-toolbar.service';
import { finalize } from 'rxjs/operators';
import { Convidado } from './lista-presentes-service';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt-PT';

@Component({
  selector: 'app-confirma-presenca',
  templateUrl: './confirma-presenca.component.html',
  styleUrls: ['./confirma-presenca.component.css']
})
export class ConfirmaPresencaComponent {

  confirmaPresenca: ConfirmaPresenca = new ConfirmaPresenca();

  constructor(private confirmaPresencaService: ConfirmaPresencaService) {
    ColoreToolbarService.coloreToolBar('confirmar');
    registerLocaleData(localeBr);
  }

  mostraImagemFundo() {
    ColoreToolbarService.mostraImagemFundo();
  }

  isNullOrEmpty(str: string): boolean {
    return (str == null || str.trim() == '');
  }

  hasTowStrings(str: string): boolean {
    return str.split(' ').length >= 2;
  }

  limpaValidacao() {
    $('.confirma-presenca input').removeClass('valid');
    $('.confirma-presenca input').removeClass('invalid');
  }

  validaTela(): boolean {
    var valido = true;

    this.limpaValidacao();

    if (this.confirmaPresenca.quantidadeAdultos > 0) {
      $('#qtd-adultos').addClass('valid');
    }
    else {
      $('#qtd-adultos').addClass('invalid');
      valido = false;
    }

    if (this.confirmaPresenca.quantidadeCrianca >= 0) {
      $('#qtd-criancas').addClass('valid');
    }
    else {
      valido = false;
      $('#qtd-criancas').addClass('invalid');
    }

    if (!this.isNullOrEmpty(this.confirmaPresenca.nome) &&
      this.hasTowStrings(this.confirmaPresenca.nome)) {
      $('#nome-convidado').addClass('valid');
    }
    else {
      valido = false;
      $('#nome-convidado').addClass('invalid');
    }

    return valido;
  }

  clickConfirmaPresenca() {

    if (!this.validaTela()) {
      new M.Toast({
        html: "Opa, falta algo.",
        displayLength: 5000,
        classes: "red lighten-1"
      });

      return;
    }

    ColoreToolbarService.iniciaLoading();

    // console.log(this.confirmaPresenca);
    // return;

    this.confirmaPresencaService.saveData(this.confirmaPresenca)
      .pipe(finalize(() => ColoreToolbarService.finalizaLoading()))
      .subscribe(res => {
        // console.log(res);

        // Trata o retorno
        if (res.situacao == 6) {
          var listaConvidado: Convidado[];
          listaConvidado = JSON.parse(res.mensagem);

          this.preencheListaPresentes(listaConvidado);
        }
        else {
          this.finalizaConfirmacao();
        }
      },
        error => {
          console.log(error);
          new M.Toast({
            html: "Opa, algo deu errado.",
            displayLength: 5000,
            classes: "red lighten-1"
          });
          ColoreToolbarService.finalizaLoading();
        }
      );
  }

  finalizaConfirmacao() {
    new M.Toast({
      html: "Te esperamos lá!",
      displayLength: 5000,
      classes: "blue lighten-1"
    });

    this.confirmaPresenca = new ConfirmaPresenca();
    ColoreToolbarService.finalizaLoading();
    this.limpaValidacao();
  }

  preencheListaPresentes(listaConvidados: Convidado[]) {

    $('.aparece .confirma-presenca').fadeOut();
    $('.aparece .lista-presentes').removeAttr('hidden');

    var novaLista: Convidado[];
    novaLista = new Array<Convidado>();

    for (let i = 0; i < listaConvidados.length; i++) {
      var conv: Convidado = new Convidado(new DatePipe("pt-PT"));
      conv.parse(listaConvidados[i]);
      novaLista.push(conv);

      console.log(conv.template());
      $('.lista-presentes tbody').append(conv.template());
    }

    // $('.lista-presentes tr').append(value.template());
    console.log("Veio a lista corretamente.");
  }

}
