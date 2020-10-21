import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <----
import { DataService } from '../shared/data.service';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
];
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent{
  personajes: Array<any> = [];

  title = 'personajeApi';

  displayedColumns: string[] = ['position', 'name'];
  dataSource = this.personajes;

  constructor(public http: HttpClient, public dataService: DataService) {}
  
  @ViewChild(MatPaginator, {static:true}) paginador: MatPaginator;

  mostrarInformacion(){
    this.dataService.getAll().subscribe(resp=>{
      this.personajes=resp;
      console.log(this.personajes)
      displayedColumns: Array[]= ['name', 'gender'];
      this.dataSource= this.personajes;
    })
  }
  ngOnInit(): void {
    this.mostrarInformacion();
 }  
}
