import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {


  constructor(private http: HttpClient) { }

  // observable -- esta pendiende de posibles cambios rxjs

  crearBackup(params:any):Observable<any>{
    return this.http.post(`${environment.url+"backup"}`,params).pipe(map((resp:any)=>resp));
  }

  obtener(url: string): Observable<any> {
    return this.http.get(`${environment.url + url}`).pipe(map((resp: any) => resp.data));
  }

  crear(params: any): Observable<any> {
    return this.http.post(`${environment.url + "bitacora"}`, params).pipe(map((resp: any) => resp));
  }

  crearUserPers(params: any): Observable<any> {
    return this.http.post(`${environment.url + "personauser"}`, params).pipe(map((resp: any) => resp));
  }

  mostrarpermisos(): Observable<any> {
    let id = localStorage.getItem('rol');
    return this.http.get(`${environment.url + 'permisossistema/'}${id}`).pipe(map((resp: any) => resp.data));
  }

  login(params: any) {
    return this.http.post(`${environment.url + 'login'}`, params).pipe(map((resp: any) => resp));
  }

  recuperacionCorreo(params: any) {
    return this.http.post(`${environment.url + 'recuperacioncorreo'}`, params).pipe(map((resp: any) => resp));
  }

  cambiopass(params: any) {
    return this.http.post(`${environment.url + 'cambiopass'}`, params).pipe(map((resp: any) => resp));
  }

  configPreguntas(params: any) {
    return this.http.post(`${environment.url + 'login'}`, params).pipe(map((resp: any) => resp));
  }

}
