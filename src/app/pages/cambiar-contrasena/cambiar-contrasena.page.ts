import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  mdl_actual: string = '';
  mdl_nueva: string = '';
  mdl_confirmar: string = '';

  v_visible = false;
  v_mensaje = '';

  constructor(private router: Router, private db: DbService) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state){
    this.usuario = extras?.extras.state['usuario'];
    this.contrasena = extras?.extras.state['contrasena'];
    }
  }

  cambiarContrasena() {
    this.db.loginUsuario(this.usuario, this.mdl_actual)
      .then(data => {
        if (data === 0) {
          this.mostrarMensajeError('La contraseña actual no es correcta');
          return;
        }
  
        if (this.mdl_nueva !== this.mdl_confirmar) {
          this.mostrarMensajeError('Las contraseñas ingresadas no coinciden');
          return;
        }
  
        // Si todo está correcto, cambiar la contraseña
        this.db.cambiarContrasena(this.usuario, this.contrasena, this.mdl_nueva);
  
        // Configuración de navegación
        const extras: NavigationExtras = { replaceUrl: true };
        this.router.navigate(['login'], extras);
      });
  }
  
  mostrarMensajeError(mensaje: string) {
    this.v_visible = true;
    this.v_mensaje = mensaje;
  }
  

}
