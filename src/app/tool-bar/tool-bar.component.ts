import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  rotaAtual : string = this.router.url;
  sideNavAtiva : boolean = false;

  constructor(private router: Router) { }

  public clickSideNav () {
    $('.controla-menu').addClass('menu-cell-ativo');
    console.log('Menu desativado');
    this.sideNavAtiva = true;
  }
  
  public fechaMenuCell(meuTarget : Element) {
    if (!this.sideNavAtiva){
      console.log('Fecha Menu');
      $('.controla-menu').removeClass('menu-cell-ativo');
    }

    this.sideNavAtiva = false;
  }

}
