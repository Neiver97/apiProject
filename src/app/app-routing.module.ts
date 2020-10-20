import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaComponent } from './pelicula/pelicula.component';
import {PersonajeComponent} from './personaje/personaje.component'
//import {} from '';//Here import my component

const routes: Routes = [
  { 
    path: 'personaje',
    component: PersonajeComponent
   },
   {
     path: 'pelicula',
    component: PeliculaComponent
},
   {
    path: '**',
    component: PersonajeComponent
   }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
