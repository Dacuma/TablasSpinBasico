import { ParametrosRango } from './../rangos.service';
import { RangosService, C } from '../rangos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dcm-rangos',
  templateUrl: './rangos.component.html',
  styleUrls: ['./rangos.component.css']
})
export class RangosComponent implements OnInit {

  @Input() set parametrosRango(valor: ParametrosRango) {
    this.cambiarRangos(valor);
  }
  public colores: any;
  public aux;

  constructor(private _manosService: RangosService) { }

  ngOnInit() {

  }

  cambiarRangos(parametros: ParametrosRango) {
    this.aux = parametros.principal + '' + parametros.secundario;
    switch (this.aux) {
      case '11':
        this.colores = this._manosService.BU_0_9;
        break;
      case '12':
        this.colores = this._manosService.BU_9_15;
        break;
      case '13':
        this.colores = this._manosService.BU_15;
        break;
      case '21':
        this.colores = this._manosService.SB_BB_0_9;
        break;
      case '22':
        this.colores = this._manosService.SB_BB_9_15;
        break;
      case '23':
        this.colores = this._manosService.SB_BB_15;
        break;
      case '34':
        this.colores = this._manosService.SB_BU_0_9_LIMP;
        break;
      case '35':
        this.colores = this._manosService.SB_BU_9_15_LIMP;
        break;
      case '36':
        this.colores = this._manosService.SB_BU_15_LIMP;
        break;
      case '37':
        this.colores = this._manosService.SB_BU_0_9_RAISE;
        break;
      case '38':
        this.colores = this._manosService.SB_BU_9_15_RAISE;
        break;
      case '39':
        this.colores = this._manosService.SB_BU_15_RAISE;
        break;
      case '313':
        this.colores = this._manosService.SB_BU_0_9_AI;
        break;
      case '314':
        this.colores = this._manosService.SB_BU_9_15_AI;
        break;
      case '315':
        this.colores = this._manosService.SB_BU_15_AI;
        break;
      case '44':
        this.colores = this._manosService.BB_BU_0_9_LIMP;
        break;
      case '45':
        this.colores = this._manosService.BB_BU_9_15_LIMP;
        break;
      case '46':
        this.colores = this._manosService.BB_BU_15_LIMP;
        break;
      case '47':
        this.colores = this._manosService.BB_BU_0_9_RAISE;
        break;
      case '48':
        this.colores = this._manosService.BB_BU_9_15_RAISE;
        break;
      case '49':
        this.colores = this._manosService.BB_BU_15_RAISE;
        break;
      case '413':
        this.colores = this._manosService.BB_BU_0_9_AI;
        break;
      case '414':
        this.colores = this._manosService.BB_BU_9_15_AI;
        break;
      case '415':
        this.colores = this._manosService.BB_BU_15_AI;
        break;
      case '54':
        this.colores = this._manosService.BB_SB_0_9_LIMP;
        break;
      case '55':
        this.colores = this._manosService.BB_SB_9_15_LIMP;
        break;
      case '56':
        this.colores = this._manosService.BB_SB_15_LIMP;
        break;
      case '57':
        this.colores = this._manosService.BB_SB_0_9_RAISE;
        break;
      case '58':
        this.colores = this._manosService.BB_SB_9_15_RAISE;
        break;
      case '59':
        this.colores = this._manosService.BB_SB_15_RAISE;
        break;
      case '510':
        this.colores = this._manosService.BB_SB_0_9_ROL;
        break;
      case '511':
        this.colores = this._manosService.BB_SB_9_15_ROL;
        break;
      case '512':
        this.colores = this._manosService.BB_SB_15_ROL;
        break;
      case '513':
        this.colores = this._manosService.BB_SB_0_9_AI;
        break;
      case '514':
        this.colores = this._manosService.BB_SB_9_15_AI;
        break;
      case '515':
        this.colores = this._manosService.BB_SB_15_AI;
        break;
      case '64':
        this.colores = this._manosService.HU_0_9_LIMP;
        break;
      case '65':
        this.colores = this._manosService.HU_9_15_LIMP;
        break;
      case '66':
        this.colores = this._manosService.HU_15_LIMP;
        break;
      case '67':
        this.colores = this._manosService.HU_0_9_RAISE;
        break;
      case '68':
        this.colores = this._manosService.HU_9_15_RAISE;
        break;
      case '69':
        this.colores = this._manosService.HU_15_RAISE;
        break;
      case '616':
        this.colores = this._manosService.HU_SB_0_9_BB;
        break;
      case '617':
        this.colores = this._manosService.HU_SB_9_15_BB;
        break;
      case '618':
        this.colores = this._manosService.HU_SB_15_BB;
        break;
      case '613':
        this.colores = this._manosService.HU_0_9_AI;
        break;
      case '614':
        this.colores = this._manosService.HU_9_15_AI;
        break;
      case '615':
        this.colores = this._manosService.HU_15_AI;
        break;
      default:
        this.colores = this._manosService.plantilla;
    }
  }

}
