import { RangosComponent } from './rangos/rangos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BotoneraPrincipalComponent } from './botonera-principal/botonera-principal.component';
import { BotoneraSecundariaComponent } from './botonera-secundaria/botonera-secundaria.component';
import { LeyendaComponent } from './leyenda/leyenda.component';
import { LogospinprojectComponent } from './logospinproject/logospinproject.component';

@NgModule({
  declarations: [
    AppComponent,
    RangosComponent,
    BotoneraPrincipalComponent,
    BotoneraSecundariaComponent,
    LeyendaComponent,
    LogospinprojectComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
