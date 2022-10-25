import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private _http: HttpClient) { }

  listarEstudiantes() {
    return this._http.get(environment.url + 'listar');
  }

  crearAlumno(data: any) {
    return this._http.post(environment.url + 'crear', data);
  }

  editarAlumno(id: any) {
    return this._http.get(environment.url + 'editarAlumno/' + id);
  }

  actualizarDatos(data: any) {
    return this._http.post(environment.url + 'actualizar', data);
  }

  cambiarEstado(data: any) {
    return this._http.post(environment.url + 'estado', data);
  }

  listarTipoDocumentos() {
    return this._http.get(environment.url + 'listarTipoDocumento');
  }

  listarCursos() {
    return this._http.get(environment.url + 'listarCursos');
  }
}
