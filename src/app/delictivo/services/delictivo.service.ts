import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Delictivo } from '../models/delictivo';

@Injectable({
  providedIn: 'root',
})
export class DelictivoService {
  urlApi: string = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  crearActoDelictivo(delictivo: Delictivo): Observable<any> {
    return this.http.post(`${this.urlApi}crime/registro`, delictivo).pipe(
      map((response: any) => response.delictivo as Delictivo),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
