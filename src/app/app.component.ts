import { Component } from '@angular/core';
import { EstudiantesService } from './services/estudiantes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebaTecnicaFront';

  constructor(private svc: EstudiantesService) {}

  ngOnInit(): void {
    this.login();
  }

  login() {
    let data = {email: 'jbautistavallejo@gmail.com', password: '123456'};
    this.svc.login(data).subscribe((res: any) => {
      localStorage.setItem('token',res.access_token);      
    });
  }
}
