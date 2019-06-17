import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
  }

  diasAteCasamento : number = 0; 

  constructor() { 
    this.diasAteCasamento = this.calcDiasAteCasamento();
  }

  calcDiasAteCasamento () : number {

    var date1 = new Date();
    var date2 = new Date(2019, 9, 28, 16, 0);

    var diff = Math.abs(date1.getTime() - date2.getTime());

    return Math.ceil(diff / (1000 * 3600 * 24)); 
  }

}
