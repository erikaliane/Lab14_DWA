import { Component, OnInit } from '@angular/core';
import { Tripulacion } from 'src/app/models/tripulacion';
import { TripulacionService } from 'src/app/services/tripulacion.service';

@Component({
  selector: 'app-tripulacion',
  templateUrl: './tripulacion.component.html',
  styleUrls: ['./tripulacion.component.css']
})
export class TripulacionComponent implements OnInit {
  
  listTripulacion: Tripulacion[] = [] ;
  elementos: number = 0 ;

  constructor(private _tripulacionService: TripulacionService){}

  ngOnInit(): void {

    this.obtenerTripulacion();

  }

  obtenerTripulacion(){
    this._tripulacionService.getTripulacion().subscribe(data =>{
      console.log(data);
      this.listTripulacion = data;
      this.elementos = this.listTripulacion.length;

    });

  }
  eliminarTripulacion(id:string){

    this._tripulacionService.deleteTripulacion(id).subscribe(data=>{
      console.log(data);

      this.obtenerTripulacion();
      this.elementos = this.listTripulacion.length;
    })
  }

}
