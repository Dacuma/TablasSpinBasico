import { botonPrincipal, botonSecundario, ParametrosRango } from './rangos.service';
import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'dcm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  botonActivo = botonPrincipal.BU;
  parametrosRango: ParametrosRango = {
    principal: 1,
    secundario: 1
  };

  ngOnInit() {
    console.log('Esta página está bendecida por el duendecillo de la suerte, estás blessed eduquito. GL');
  }

  botonPrincipal(event) {
    this.botonActivo = event;
  }

  botonSecundario(event) {
    this.parametrosRango = {
      principal: this.botonActivo,
      secundario: event
    };
  }
}
