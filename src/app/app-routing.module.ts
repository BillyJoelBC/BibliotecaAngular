import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquilerComponent } from './paginas/alquiler/alquiler.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'alquiler',
    component: AlquilerComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
