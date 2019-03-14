import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PageBase } from '../base/page-base';
import { Carousel } from "materialize-css";
import * as M from '../../assets/materializeCss/js/materialize.min.js'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements AfterViewInit {
  
  options = {};

  constructor() { 
    console.log("Galeria construtor.");
    // super(document);
    // var carousel = document.querySelector('.carousel');
    // var instance = M.Carousel.init(carousel);
    // console.log("Obj: " || JSON.stringify(instance));
    console.log('Porra!');
  }

  ngAfterViewInit (){
    // $(document)s
    console.log('Porra - auhasuhaskluh');
    var element = document.querySelector('.carousel');
    var instance = M.carousel.init(element, this.options);
  }

}
