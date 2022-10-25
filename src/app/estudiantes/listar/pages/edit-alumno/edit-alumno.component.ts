import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiantesService } from 'src/app/services/estudiantes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  id_alumno: any;
  tipoDocumentos: any = [];
  cursos: any = [];

  constructor(private formbuild: FormBuilder,
              private router: Router,
              public _activeRoute: ActivatedRoute,
              private svc: EstudiantesService) { }

  ngOnInit(): void {
    this.id_alumno = this._activeRoute.snapshot.params['idAlumno'];
    this.crearFormulario();
    this.editarAlumno();
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
      activo: new FormControl('',[Validators.required]),
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

  editarAlumno() {
    this.svc.editarAlumno(this.id_alumno).subscribe((res: any) => {

      //Asignar valores al formulario reactivo
      this.form.get('nombre')?.patchValue(res.data[0].nombre);
      this.form.get('apellido')?.patchValue(res.data[0].apellido);
      this.form.get('telefono')?.patchValue(res.data[0].telefono);
      this.form.get('direccion')?.patchValue(res.data[0].direccion);
      this.form.get('email')?.patchValue(res.data[0].email);
      this.form.get('numero_documento')?.patchValue(res.data[0].numero_documento);
      this.form.get('activo')?.patchValue(res.data[0].activo);
      this.form.get('id_tipo_documento')?.patchValue(res.data[0].id_tipo_documento);
      this.form.get('id_curso')?.patchValue(res.data[0].id_curso);
      
    });
  }

  actualizar() {
    //Asignación de dato ID al formulario reactivo
    const frmCuento = new FormData();
    frmCuento.append('id', this.id_alumno);

    for (const item in this.form.value) {      
      frmCuento.append(item, this.form.value[item]);
    }

    this.svc.actualizarDatos(frmCuento).subscribe((res: any) => {
      if (res.success) {
        this.response('Éxito', 'success', res.data);
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
