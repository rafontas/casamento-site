import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Carousel } from "materialize-css";
import * as M from '../../assets/materializeCss/js/materialize.min.js'
import { ColoreToolbarService } from '../colore-toolbar.service';
import { FotoView } from './foto-view-modelo';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements AfterViewInit {
  
  pathFotosPequenas : string = "../src/app/images/galeria/pequenas/";
  pathFotosGrandes : string = "../src/app/images/galjeria/normal/";
  htmlFotos : string = "";
  qtdArrayFotos : number [];

  options = {};

  constructor() { 
    ColoreToolbarService.coloreToolBar('fotos');
    $(document).ready(function(){
      $('.tabs').tabs();
    });
  }

  ngAfterViewInit() { 
    this.montaFotosPre();
  }
  
  montaFotosPre () : void {
    let conteGaleria : number = 1;
    let strHTML : string = "";
    var fotosGaleriaPre : FotoView [] = FotoView.getFotosPre();
    
    for (var i = 0; i < fotosGaleriaPre.length; i++) {
      if (FotoView.getAbreDivPre(fotosGaleriaPre[i], conteGaleria)) {
        strHTML += `<div class="row">`;
      }
      
      strHTML += fotosGaleriaPre[i].getTemplatePre();
      
      if (FotoView.getFechaDivPre(fotosGaleriaPre[i], conteGaleria)) {
        strHTML += `</div>`;
        
        conteGaleria = 0;
      }
      
      conteGaleria++;
    }

    $('.preCasamento').html(strHTML);
  }

  montaFotosCasamento () {

  }
  
  montaFotosPos () {

  }

}

