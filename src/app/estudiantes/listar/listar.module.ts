import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ListAlumnosComponent } from './pages/list-alumnos/list-alumnos.component';
import { EditAlumnoComponent } from './pages/edit-alumno/edit-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearAlumnoComponent } from './pages/crear-alumno/crear-alumno.component';


@NgModule({
  declarations: [
    ListAlumnosComponent,
    EditAlumnoComponent,
    CrearAlumnoComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListarModule { }
