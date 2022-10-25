import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';

import { ListarComponent } from './listar/listar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule
  ]
})
export class EstudiantesModule { }
