import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviones} from '../models/aviones';

@Injectable({
  providedIn: 'root'
})
export class AvionesService {
  // Url de aviones--> deben existir los metodos especificados
  // en este servicios para su buen funcionamiento

  url = 'http://localhost:4000/api/avion';

  constructor(private http: HttpClient) { 

  }

  getAviones(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteAviones(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarAviones(tipo: Aviones): Observable<any> {
    return this.http.post(this.url, tipo);
  }

  viewAviones(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarAviones(id: string, tipo: Aviones): Observable<any> {
    return this.http.put(this.url + id, tipo);
  }

}
