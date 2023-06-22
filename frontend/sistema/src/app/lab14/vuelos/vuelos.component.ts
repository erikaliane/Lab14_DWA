import { Component, OnInit } from '@angular/core';
import { Vuelos } from 'src/app/models/vuelos';
import { VuelosService } from 'src/app/services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
})
export class VuelosComponent implements OnInit {

  listVuelos: Vuelos[] = [];
  elementos: number = 0;

  constructor(private _vuelosService: VuelosService){}

  ngOnInit(): void {
    this.obtenerVuelos();
  }

  obtenerVuelos() {

    this._vuelosService.getVuelos().subscribe(data => {
 
      //Verificar si esta trayendo correctamento la data
      console.log(data);

      this.listVuelos = data;
      this.elementos = this.listVuelos.length;

    });

  }

  eliminarVuelo(id: any){

    this._vuelosService.deleteVuelos(id).subscribe(data => {

      //Verificamos si imprime el dato eliminado
      console.log(data);

      this.obtenerVuelos();
      this.elementos = this.listVuelos.length;

    });

  }

}
