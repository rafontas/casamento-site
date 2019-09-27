import { Component, AfterViewInit } from '@angular/core';
import { ColoreToolbarService } from '../colore-toolbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  diasAteCasamento : number =  this.calcDiasAteCasamento ();

  constructor() { 
    ColoreToolbarService.coloreToolBar('home');
    setInterval(() => {
      this.diasAteCasamento = this.calcDiasAteCasamento ();
      this.setTextoDiasCasamentos();
    }, 100);
  }

  setTextoDiasCasamentos () : void {
    
    this.diasAteCasamento = this.calcDiasAteCasamento ();
  
    if (this.diasAteCasamento == 0) {
      $('.txt-faltam-dias').html('É hoje!!!');
    } 
    else if (this.diasAteCasamento < 0) {
      $('.txt-faltam-dias').html('Passou! As fotas estão na galeria! Confere lá!');
    }
    else if (this.diasAteCasamento == 1) {
      $('.txt-faltam-dias').html(`Falta ${this.diasAteCasamento} dia`);
    }
    else {
      $('.txt-faltam-dias').html(`Faltam ${this.diasAteCasamento} dias`);
    }
  }


  mostraImagemFundo()  {
    ColoreToolbarService.mostraImagemFundo();
  }

  calcDiasAteCasamento () : number {

    var date1 = new Date();
    var date2 = new Date(2019, 8, 28);

    var diff = date2.getTime() - date1.getTime();

    return Math.ceil(diff / (1000 * 3600 * 24)); 
  }

}
