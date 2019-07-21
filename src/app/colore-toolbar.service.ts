import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColoreToolbarService {

  constructor() { }
  
  static coloreToolBar (itemChamou : string) {
    $('#nav-web li').removeClass('pag-ativa');
    $('#' + itemChamou).addClass('pag-ativa');
  }
}
