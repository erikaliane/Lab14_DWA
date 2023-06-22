import { Component, OnInit } from '@angular/core';
import { Aviones } from 'src/app/models/aviones';
import { AvionesService } from 'src/app/services/aviones.service';

@Component({
  selector: 'app-aviones',
  templateUrl: './aviones.component.html',
  styleUrls: ['./aviones.component.css']
})
export class AvionesComponent implements OnInit{
  listAviones: Aviones[] = [];
  elementos: number = 0 ;

  constructor(private _avionesService: AvionesService){
    
  }
  ngOnInit(): void {

    this.obtenerAviones();
  }

  obtenerAviones(){
    this._avionesService.getAviones().subscribe(data =>{
      console.log(data);
      this.listAviones = data;
      this.elementos = this.listAviones.length;
    })

  }
  
  eliminarAviones(id:any){

    this._avionesService.deleteAviones

  }

}
