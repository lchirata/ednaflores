import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Planta} from '../models/Planta';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  constructor(private http: HttpClient) { }

  listarPlantas(): Observable<any> {
    return this.http.get('http://localhost:3001/plantas');
  }

  // comprar(plantas: Array<Planta>): Observable<any> {
  //   return new Observable();
  //   }
}
