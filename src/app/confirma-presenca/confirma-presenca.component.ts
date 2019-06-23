import { Component, OnInit } from '@angular/core';
import { ConfirmaPresenca } from './confirma-presenca';

@Component({
  selector: 'app-confirma-presenca',
  templateUrl: './confirma-presenca.component.html',
  styleUrls: ['./confirma-presenca.component.css']
})
export class ConfirmaPresencaComponent implements OnInit {

  confirmaPresenca : ConfirmaPresenca = new ConfirmaPresenca();

  constructor() { }

  ngOnInit() {
  }

  clickConfirmaPresenca() {
    new M.Toast({
      html: "Te esperamos lá!",
      displayLength: 5000,
      classes: 'rounded'
    });

    this.confirmaPresenca = new ConfirmaPresenca();
  }

}
