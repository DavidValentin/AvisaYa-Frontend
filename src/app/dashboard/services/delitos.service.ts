import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DelitosService {
  urlApi: string = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  listarDelitos(): Observable<any> {
    return this.http.get(`${this.urlApi}crime/todos`);
  }
}
