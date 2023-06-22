import { Component, OnInit } from '@angular/core';
import { Pilotos } from 'src/app/models/pilotos';
import { PilotosService } from 'src/app/services/pilotos.service';

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})
export class PilotoComponent implements OnInit{

  listPilotos: Pilotos[] = [];
  elementos: number = 0;

  constructor(private _pilotoService: PilotosService){}

  ngOnInit(): void {
    
    this.obtenerPilotos();

  }

  obtenerPilotos(){

    this._pilotoService.getPilotos().subscribe(data => {

      //Verificar si esta trayendo correctamento la data
      console.log(data);

      this.listPilotos = data;
      this.elementos = this.listPilotos.length;

    });

  }

  eliminarPiloto(id: any){

    this._pilotoService.deletePiloto(id).subscribe(data => {

      //Verificamos si imprime el dato eliminado
      console.log(data);

      this.obtenerPilotos();
      this.elementos = this.listPilotos.length;

    })

  }

}
