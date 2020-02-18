import { Injectable } from '@angular/core';

export class ParametrosRango {
  principal: botonPrincipal;
  secundario: botonSecundario;
}

export enum botonPrincipal {
  BU = 1,
  SBvsBB = 2,
  SBvsBU = 3,
  BBvsBU = 4,
  BBvsSB = 5,
  HU = 6
}

export enum botonSecundario {
  B0a9 = 1,
  B9a15 = 2,
  B15 = 3,
  B0a9Limp = 4,
  B9a15Limp = 5,
  B15Limp = 6,
  B0a9Raise = 7,
  B9a15Raise = 8,
  B15Raise = 9,
  B0a9Rol = 10,
  B9a15Rol = 11,
  B15Rol = 12,
  B0a9AI = 13,
  B9a15AI = 14,
  B15AI = 15,
  SB0a9BB = 16,
  SB9a15BB = 17,
  SB15BB = 18,
}

export enum RangosCiegas {
  De0a9 = 0,
  De9a15 = 1,
  MasDe15 = 2
}

export enum C {
  Ama = '#ffff00', // Igualar las ciegas o apuestas que nos enfrentemos o pasar
  Ver = '#00ff00', // Subir all-in abriendo o haciendo un 3bet
  Azu = '#33ffff', // Abrir o resubir pequeño, para acabar all-in si el rival sube de nuevo
  Roj = '#e60000', // Abrir o resubir pequeño, para abandonar si el rival sube de nuevo
  Mor = '#a31aff', // Abrir o pagar una resubida pequeña, abandonar ante all in.
  ___ = '#FFFFFF'
}

@Injectable({
  providedIn: 'root'
})
export class RangosService {
  constructor() {
  }

  // ----------------------------------------------------------------
  // ---- BU
  // ----------------------------------------------------------------
  BU_0_9 = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BU_9_15 = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Azu, C.Roj, C.Azu, C.Azu, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BU_15 = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Azu, C.Azu, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___],
    [C.Ver, C.Mor, C.Azu, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Mor, C.Roj, C.Azu, C.Mor, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Azu, C.Mor, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.Roj, C.___, C.___, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.___, C.___, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  // ----------------------------------------------------------------
  // ---- SB vs BB
  // ----------------------------------------------------------------
  SB_BB_0_9 = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BB_9_15 = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Ver, C.Ver, C.Azu, C.Azu, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Azu, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.Roj, C.Ver, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.Roj, C.___],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.___],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BB_15 = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Azu, C.Azu, C.Mor, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Mor, C.Azu, C.Mor, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Mor, C.Mor, C.Azu, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Mor, C.Roj, C.Roj, C.Azu, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.Roj, C.Ver, C.Roj, C.Roj, C.___, C.___],
    [C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.Roj, C.___],
    [C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj, C.Roj],
    [C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj],
    [C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  // ----------------------------------------------------------------
  // ---- SB vs BU
  // ----------------------------------------------------------------
  SB_BU_0_9_LIMP = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama, C.Ama, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BU_0_9_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  SB_BU_0_9_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BU_9_15_LIMP = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BU_9_15_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  SB_BU_9_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  SB_BU_15_LIMP = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Roj, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Roj, C.Azu, C.Roj, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  SB_BU_15_RAISE = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Azu, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  SB_BU_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  // ----------------------------------------------------------------
  // ---- BB vs BU
  // ----------------------------------------------------------------
  BB_BU_0_9_LIMP = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_BU_0_9_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_BU_0_9_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_BU_9_15_LIMP = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_BU_9_15_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_BU_9_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_BU_15_LIMP = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_BU_15_RAISE = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_BU_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  // ----------------------------------------------------------------
  // ---- BB vs SB
  // ----------------------------------------------------------------
  BB_SB_0_9_LIMP = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_SB_0_9_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_0_9_ROL = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_0_9_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_9_15_LIMP = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_SB_9_15_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_9_15_ROL = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  BB_SB_9_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_15_LIMP = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  BB_SB_15_RAISE = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  BB_SB_15_ROL = [
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ama, C.Ama, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ama, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  BB_SB_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

  // ----------------------------------------------------------------
  // ---- HU
  // ----------------------------------------------------------------
  HU_SB_0_9_BB = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_0_9_LIMP = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  HU_0_9_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_0_9_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_SB_9_15_BB = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Ver, C.Ver, C.Azu, C.Azu, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Azu, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.___],
    [C.Ver, C.Roj, C.Roj, C.___, C.___, C.Roj, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.Roj, C.Ver, C.Roj, C.Roj],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Roj],
    [C.Ver, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_9_15_LIMP = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  HU_9_15_RAISE = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama],
    [C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_9_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_SB_15_BB = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Roj, C.Roj, C.Roj],
    [C.Azu, C.Azu, C.Mor, C.Mor, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Azu, C.Mor, C.Azu, C.Mor, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Azu, C.Mor, C.Mor, C.Azu, C.Mor, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Mor, C.Mor, C.Mor, C.Azu, C.Mor, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Ver, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___],
    [C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj, C.___],
    [C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Roj, C.Azu, C.Roj, C.Roj, C.Roj, C.Roj],
    [C.Roj, C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.Roj, C.Roj, C.Ver, C.Roj, C.Roj, C.Roj],
    [C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.Roj, C.Ver, C.Roj, C.Roj],
    [C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Roj, C.Ver, C.Roj],
    [C.Roj, C.Roj, C.Roj, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_15_LIMP = [
    [C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Azu, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Azu, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver],
  ];

  HU_15_RAISE = [
    [C.Azu, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Azu, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Azu, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama, C.___],
    [C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ama, C.Ver, C.Ama, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.Ama],
    [C.Ama, C.Ama, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver],
  ];

  HU_15_AI = [
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.Ver, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.Ver, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.Ver, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];


  // ----------------------------------------------------------------
  // ---- PLANTILLA
  // ----------------------------------------------------------------
  plantilla = [
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
    [C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___, C.___],
  ];

}
