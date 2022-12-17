import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlApi: string = `${environment.api.baseUrl}`;

  constructor(private http: HttpClient) {}

  crearUsuario(user: User): Observable<any> {
    return this.http.post(`${this.urlApi}user/registro`, user).pipe(
      map((response: any) => response.user as User),
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

  auth(user: User): Observable<any> {
    return this.http.post(`${this.urlApi}user/auth`, user).pipe(
      map((userData: any) => {
        console.log('userdata', userData);
        // if (userData.code == 200) {
        sessionStorage.setItem('username', userData?.user.usuario);
        sessionStorage.setItem('tokenAuth', userData.token);
        // }
        return userData;
      })
    );
  }
}
