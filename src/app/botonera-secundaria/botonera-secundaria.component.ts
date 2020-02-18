import { botonSecundario, botonPrincipal, RangosCiegas } from './../rangos.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dcm-botonera-secundaria',
  templateUrl: './botonera-secundaria.component.html',
  styleUrls: ['./botonera-secundaria.component.css']
})
export class BotoneraSecundariaComponent implements OnInit {

  botonActivo;
  rangoactual: RangosCiegas = RangosCiegas.De0a9;

  @Input() set iBotonActivo(valor: botonPrincipal) {
    this.posicionaBoton(valor);
    this.botonActivo = valor;
  }

  @Output() public botonpulsado = new EventEmitter<botonSecundario>();

  botonSecActivo = 1;
  boton = botonSecundario;

  constructor() { }

  ngOnInit() {
    this.botonSecActivo = 1;
  }

  botonPulsado(valor) {
    this.botonSecActivo = valor;
    this.actualizaRangoCiegaActual(valor);
    this.botonpulsado.next(valor);
  }

  posicionaBoton(valor) {
    let aux = valor < 3 ? 1 : valor < 6 ? 4 : 16;
    if (valor === 1 || valor === 2) {
      switch (this.rangoactual) {
        case RangosCiegas.MasDe15:
          aux = 3;
          break;
        case RangosCiegas.De9a15:
          aux = 2;
          break;
        default:
          aux = 1;
      }
    }
    if (valor === 3 || valor === 4 || valor === 5) {
      switch (this.rangoactual) {
        case RangosCiegas.MasDe15:
          aux = 6;
          break;
        case RangosCiegas.De9a15:
          aux = 5;
          break;
        default:
          aux = 4;
      }
    }
    if (valor === 6) {
      switch (this.rangoactual) {
        case RangosCiegas.MasDe15:
          aux = 18;
          break;
        case RangosCiegas.De9a15:
          aux = 17;
          break;
        default:
          aux = 16;
      }
    }

    this.botonSecActivo = aux;
    this.botonPulsado(aux);
  }

  actualizaRangoCiegaActual(valor) {
    switch (valor) {
      case 3:
      case 6:
      case 9:
      case 12:
      case 15:
      case 18:
        this.rangoactual = RangosCiegas.MasDe15;
        break;
      case 2:
      case 5:
      case 8:
      case 11:
      case 14:
      case 17:
        this.rangoactual = RangosCiegas.De9a15;
        break;
      default:
        this.rangoactual = RangosCiegas.De0a9;
    }
  }
}
