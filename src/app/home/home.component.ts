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
      this.diasAteCasamento = this.calcDiasAteCasamento ()
    }, 1000);
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
