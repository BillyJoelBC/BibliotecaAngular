import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ParticulasComponent } from './componentes/particulas/particulas.component';
import { InfolibrosComponent } from './componentes/infolibros/infolibros.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { YoutubeComponent } from './componentes/youtube/youtube.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { AlquilerComponent } from './paginas/alquiler/alquiler.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { Pie2Component } from './componentes/pie2/pie2.component';
import { AlquilerCompComponent } from './componentes/alquiler-comp/alquiler-comp.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { RegistroCompComponent } from './componentes/registro-comp/registro-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    ParticulasComponent,
    InfolibrosComponent,
    MapaComponent,
    YoutubeComponent,
    PieComponent,
    CarruselComponent,
    RegistroComponent,
    AlquilerComponent,
    ContactoComponent,
    Pie2Component,
    AlquilerCompComponent,
    FormularioComponent,
    RegistroCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
