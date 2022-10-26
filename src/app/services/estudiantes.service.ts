import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  token = localStorage.getItem('token');

  headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

  constructor(private _http: HttpClient) { }

  login(data: any) {    
    return this._http.post(environment.url + 'login', data);
  }

  listarEstudiantes() {
    return this._http.get(environment.url + 'listar', {headers: this.headers});
  }

  crearAlumno(data: any) {
    return this._http.post(environment.url + 'crear', data, {headers: this.headers});
  }

  editarAlumno(id: any) {
    return this._http.get(environment.url + 'editarAlumno/' + id, {headers: this.headers});
  }

  actualizarDatos(data: any) {
    return this._http.post(environment.url + 'actualizar', data, {headers: this.headers});
  }

  cambiarEstado(data: any) {
    return this._http.post(environment.url + 'estado', data, {headers: this.headers});
  }

  listarTipoDocumentos() {
    return this._http.get(environment.url + 'listarTipoDocumento', {headers: this.headers});
  }

  listarCursos() {
    return this._http.get(environment.url + 'listarCursos', {headers: this.headers});
  }
}
