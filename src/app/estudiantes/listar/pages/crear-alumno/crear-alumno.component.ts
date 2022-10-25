import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  tipoDocumentos: any = [];
  cursos: any = [];

  constructor(private formbuild: FormBuilder,
              private router: Router,
              public _activeRoute: ActivatedRoute,
              private svc: EstudiantesService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.listarTipoDocumento();
    this.listarCursos();
  }

  crearFormulario() {
    this.form = this.formbuild.group({      
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      numero_documento: new FormControl('',[Validators.required]),
      id_tipo_documento: new FormControl('',[Validators.required]),
      id_curso: new FormControl('',[Validators.required]),
    });
  }

  listarTipoDocumento() {
    this.svc.listarTipoDocumentos().subscribe((res: any) => {
      this.tipoDocumentos = res.data;
    });
  }

  listarCursos() {
    this.svc.listarCursos().subscribe((res: any) => {
      this.cursos = res.data;
    });
  }

  crearAlumno() {
    this.svc.crearAlumno(this.form.value).subscribe((res: any) => {
      if (res.success) {
        this.response('Éxito', 'success', res.message);
      } else {
        this.response('Error', 'warning', 'Ha surgido un error.');
      }
    });
  }

  response(titulo: any, icono: any, texto:any) {
    Swal.fire({
      title: titulo,
      icon: icono,
      text: texto
    });

    this.router.navigate(['/estudiantes/listar/list']);
  }

}
