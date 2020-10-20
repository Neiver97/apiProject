import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <----
import { DataService } from '../shared/data.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent{
  title = 'personajeApi';
  personajes: Array<any> = [];
  public dataSource = new MatTableDataSource<any>(this.personajes);
  public displayedColumns: string[] = ['name']; 
    
  
  constructor(public http: HttpClient, public dataService: DataService) {
     }
  
     @ViewChild(MatPaginator, {static:true}) paginador: MatPaginator;

  mostrarInformacion(){
    this.dataService.getAll().subscribe(resp=>{
      this.personajes=resp;
      console.log(this.personajes)
      this.dataSource = new MatTableDataSource<any>(this.personajes);
      this.dataSource.paginator=this.paginador;
    })
  }


  
}
