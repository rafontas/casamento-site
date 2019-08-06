import { Component, OnInit, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit, AfterViewInit {

  rotaAtual : string = this.router.url;
  sideNavAtiva : boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  public clickToolbar($event) {
    var itemClicado = $event.target;
    itemClicado = itemClicado.parentNode;
    console.log('Clickou : ' + itemClicado.id);
    this.coloreItemEscolhido(itemClicado.id);
  }
  
  public clickSideNav (event) {
    if (this.sideNavAtiva) {
      console.log('Menu desativado');
      document.documentElement.classList.remove('menu-cell-ativo');
    }
    else {
      console.log('Menu ativado');
      document.documentElement.classList.add('menu-cell-ativo');
    }

    this.sideNavAtiva = !this.sideNavAtiva;
  }

  public coloreItemEscolhido (item : string) 
  {
    item = item.replace ('/', '');
    $('#nav-web li').removeClass('pag-ativa');
    $('#' + item).addClass('pag-ativa');
    console.log('#' + item);
  }
  
  ngAfterViewInit() {
    console.log('Chamou : ' + this.router.url);
    this.coloreItemEscolhido(this.router.url);
  }

}
