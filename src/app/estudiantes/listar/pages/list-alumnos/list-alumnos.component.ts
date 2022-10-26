import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudiantesService } from '../../../../services/estudiantes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {
  
  listAlumnos: any;
  
  constructor(private svc: EstudiantesService,
              private router: Router) { }

  ngOnInit(): void {
    this.listarAlumnos();
  }

  listarAlumnos() {
    this.svc.listarEstudiantes().subscribe((res:any) => {
      this.listAlumnos = res.data;      
    });
  }

  editarAlumno(id: any) {
    this.router.navigate(['/estudiantes/listar/edit-alumno', {idAlumno: id}]);
  }

  cambiarEstado(id: any, estado: any) {
    let cambioEstado = estado == 0 ? 1 : 0;
    let data = {
      id: id,
      activo: cambioEstado
    }

    Swal.fire({
      icon: 'question',
      title: 'Confirmar',
      text: 'Realmente deseas cambiar el estado?',
      showCancelButton: true,
      confirmButtonText: 'Cambiar',
      reverseButtons: true
    }).then((res: any) => {
      
      if( res.isConfirmed ) {
        this.svc.cambiarEstado(data).subscribe((res: any) => {
          Swal.fire({
            title: 'Éxito',
            icon: 'success',
            text: `Se actualizó el estado correctamente`
          })
          this.listarAlumnos();
        });
      }
    })

    
  }

}
