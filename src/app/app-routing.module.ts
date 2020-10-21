import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import {PersonajeComponent} from './personaje/personaje.component'
//import {} from '';//Here import my component

const routes: Routes = [
  { 
    path: 'personaje',
    component: PersonajeComponent
   },
   {
    path: '',
    component: AppComponent
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
