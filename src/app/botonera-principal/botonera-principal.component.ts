import { botonPrincipal } from './../rangos.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dcm-botonera-principal',
  templateUrl: './botonera-principal.component.html',
  styleUrls: ['./botonera-principal.component.css']
})
export class BotoneraPrincipalComponent implements OnInit {

  @Output() public botonpulsado = new EventEmitter<botonPrincipal>();
  boton = botonPrincipal;
  botonActivo = botonPrincipal.BU;

  constructor() { }

  ngOnInit() {
  }

  botonPulsado(valor) {
    this.botonActivo = valor;
    this.botonpulsado.next(valor);
  }
}
