import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes.component';

const routes: Routes = [
  {
    path: '',
    component: EstudiantesComponent,
    children: [
      {
        path: '',
        redirectTo: 'listar'
      },
      {
        path: 'listar',
        loadChildren: () => import( './listar/listar.module' ).then(m => m.ListarModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
