import { Component, OnInit } from '@angular/core';
import { ColoreToolbarService } from '../colore-toolbar.service';

@Component({
  selector: 'app-casamento',
  templateUrl: './casamento.component.html',
  styleUrls: ['./casamento.component.css']
})
export class CasamentoComponent implements OnInit {

  constructor() { 
    ColoreToolbarService.coloreToolBar('casamento');
  }

  ngOnInit() {
  }

}
