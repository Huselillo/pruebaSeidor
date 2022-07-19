import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importamos HttpClient para traernos datos de la api
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
//Metodo para traernos los datos de la api una vez se acepta el pago
  public get(url:string){
    return this.http.get(url); //GET API https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f
  }
}
