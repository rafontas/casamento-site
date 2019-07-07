import { Component, OnInit, NgModule} from '@angular/core';
import { ConfirmaPresenca } from './confirma-presenca';
import { ConfirmaPresencaService } from './confirma-presenca-service';

@Component({
  selector: 'app-confirma-presenca',
  templateUrl: './confirma-presenca.component.html',
  styleUrls: ['./confirma-presenca.component.css']
})
export class ConfirmaPresencaComponent implements OnInit {

  confirmaPresenca : ConfirmaPresenca = new ConfirmaPresenca();

  constructor(private confirmaPresencaService : ConfirmaPresencaService) { }

  ngOnInit() {
  }

  clickConfirmaPresenca() {

    this.confirmaPresencaService.saveData(this.confirmaPresenca)
      .subscribe( res => {
          new M.Toast({
            html: "Te esperamos lá!",
            displayLength: 5000
          });        
        },
        error => {
          console.log(error);
          new M.Toast({
            html: "Opa, algo deu errado.",
            displayLength: 5000
          });        
        }
      );

      this.confirmaPresenca = new ConfirmaPresenca();
  }

}
