import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  rotaAtual : string = this.router.url;

  constructor(private router: Router) { }

  ngOnInit() {}

  public clickToolbar($event) {
    var itemClicado = $event.target;
    itemClicado = itemClicado.parentNode;
    this.coloreItemEscolhido(itemClicado.id);
  }
  
  private coloreItemEscolhido (item : string) {
    
    item = item.replace ('/', '');
    $('#nav-web li').removeClass('rota-clicada');
    $('#' + item).addClass('rota-clicada');
  }
  
  ngAfterViewInit() {
    // console.log('Chamou : ' + this.router.url);
    this.coloreItemEscolhido(this.router.url);
  }

}
