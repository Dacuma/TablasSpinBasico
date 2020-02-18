import { C } from './../rangos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dcm-leyenda',
  templateUrl: './leyenda.component.html',
  styleUrls: ['./leyenda.component.css']
})
export class LeyendaComponent implements OnInit {

  constructor() { }

  descripciones = [
    {
      color: C.Ama,
      descripcion: 'Igualar las ciegas o apuestas que nos enfrentemos o pasar'
    },
    {
      color: C.Ver,
      descripcion: 'Subir all-in abriendo o haciendo un 3bet'
    },
    {
      color: C.Azu,
      descripcion: 'Abrir o resubir pequeño, para acabar all-in si el rival sube de nuevo'
    },
    {
      color: C.Roj,
      descripcion: 'Abrir o resubir pequeño, para abandonar si el rival sube de nuevo'
    },
    {
      color: C.Mor,
      descripcion: 'Abrir o pagar una resubida pequeña, abandonar ante all in'
    },
  ];

  ngOnInit() {
  }

}
