import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // <---

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list'; 
import {PersonajeComponent} from './personaje/personaje.component'

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatListModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
