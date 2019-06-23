import { Component, OnInit, NgModule } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatoEmTela : Contato = new Contato();

  constructor() { }

  ngOnInit() {
  }

  EnviaContato() {
    console.log(this.contatoEmTela);

    this.contatoEmTela = new Contato();
    new M.Toast({
      html: "Obrigado pelo contato! ;)",
      displayLength: 5000,
      classes: 'rounded'
    });
  }

}
