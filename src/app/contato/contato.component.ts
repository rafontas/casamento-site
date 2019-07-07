import { Component, OnInit, NgModule } from '@angular/core';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatoEmTela : Contato = new Contato();

  constructor(private contatoService : ContatoService) { }

  ngOnInit() {
  }

  clickEnviaContato() {

    this.contatoService.saveData(this.contatoEmTela)
      .subscribe( res => {
          new M.Toast({
            html: "Obrigado pelo contato!",
            displayLength: 5000
          });
        },
        error => {
          console.log(error);
          new M.Toast({
            html: "Opa, algo deu errado.",
            displayLength: 5000
          });        
      });

      this.contatoEmTela = new Contato();
  }

}
