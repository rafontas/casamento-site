import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoreToolbarService {

  static vendoBackground : boolean = false;

  constructor() { }

  static coloreToolBar (itemChamou : string) {
    $('.controla-menu li').removeClass('pag-ativa');
    $('.' + itemChamou).addClass('pag-ativa');
    ColoreToolbarService.vendoBackground = false;
    ColoreToolbarService.mostraImagemFundo();
  }

  static iniciaLoading() {
    $('.progress').css('visibility','visible');
  }
  
  static finalizaLoading(){
    $('.progress').css('visibility','hidden');
  }

  static mostraImagemFundo () {
    if (this.vendoBackground) {
      $('.aparece').fadeIn('slow');
      $('.shadow-form').fadeIn('slow');
      $('.ver-fundo').css('color', 'rgb(13,13,13, 0.7)');
    }
    else {
      $('.aparece').fadeOut('slow');
      $('.shadow-form').fadeOut('slow');
      $('.ver-fundo').css('color', 'rgb(42, 181, 168, 0.7)');
    }
    
    ColoreToolbarService.vendoBackground = !ColoreToolbarService.vendoBackground;
  }
}
