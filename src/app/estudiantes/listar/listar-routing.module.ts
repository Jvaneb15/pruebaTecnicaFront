import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlumnoComponent } from './pages/crear-alumno/crear-alumno.component';
import { EditAlumnoComponent } from './pages/edit-alumno/edit-alumno.component';
import { ListAlumnosComponent } from './pages/list-alumnos/list-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: ListAlumnosComponent
  },
  {
    path: 'list',
    component: ListAlumnosComponent
  },
  {
    path: 'edit-alumno',
    component: EditAlumnoComponent
  },
  {
    path: 'crear-alumno',
    component: CrearAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarRoutingModule { }
