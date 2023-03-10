import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2";

  // Getter
  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }


  constructor(private http: HttpClient) { }



  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    // Petición http
    return this.http.get<Country[]>(url, { params: this.httpParams });

  }


  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;

    // Petición http
    return this.http.get<Country[]>(url, { params: this.httpParams });

  }


  getPaisPorAlpha(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;

    // Petición http
    return this.http.get<Country>(url);

  }


  buscarRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;

    // Petición http
    return this.http.get<Country[]>(url, { params: this.httpParams });

  }


}
