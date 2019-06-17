import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PageBase } from '../base/page-base';
import { Carousel } from "materialize-css";
import * as M from '../../assets/materializeCss/js/materialize.min.js'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  
  pathFotosPequenas : string = "../src/app/images/galeria/pequenas/";
  pathFotosGrandes : string = "../src/app/images/galeria/normal/";
  quantFotos : number = 42;
  fotoAtual : number = 0;
  qtdArrayFotos : number [];

  options = {};

  constructor() { 
    this.qtdArrayFotos = Array.from(Array(this.quantFotos),(x,i)=>i);
  }

  somaUm(){
    return this.fotoAtual++;
  }

}

