import { Component, OnInit } from '@angular/core';
import { ColoreToolbarService } from '../colore-toolbar.service';

@Component({
  selector: 'app-presentes',
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {

  constructor() { 
    ColoreToolbarService.coloreToolBar('presentes');
  }
  
  mostraImagemFundo()  {
    ColoreToolbarService.mostraImagemFundo();
  }

  ngOnInit() {
  }

}
