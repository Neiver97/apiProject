import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeRoutingModule } from './personaje-routing.module';
import { PersonajeComponent } from './personaje.component';

@NgModule({
  declarations: [PersonajeComponent],
  imports: [
    CommonModule,
    PersonajeRoutingModule
  ]
})
export class PersonajeModule { }
