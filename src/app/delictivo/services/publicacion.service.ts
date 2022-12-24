import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Delictivo } from '../models/delictivo';

@Injectable({
  providedIn: 'root',
})
export class PublicacionService {
  urlApi: string = `${environment.api.baseUrl}`;

  constructor(protected http: HttpClient) {}

  getActoDelictivoId(id: any) {
    return this.http.get<Delictivo[]>(`${this.urlApi}/buscar/${id}`);
  }
}
