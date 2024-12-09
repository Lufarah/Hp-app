import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';
  correo: string = '';
  nombre: string = '';
  apellido: string = '';


  constructor(private router: Router, private db: DbService) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();

    if(extras?.extras.state){
    this.usuario = extras?.extras.state['usuario'];
    this.contrasena = extras?.extras.state['contrasena'];
    }
    
    this.infoUsuario();
  }

  infoUsuario() {
    this.db.infoUsuario(this.usuario, this.contrasena)
      .then(data => {
        this.correo = data.correo;
        this.nombre = data.nombre;
        this.apellido = data.apellido;
      })
  }

  navegarCambiarContrasena(){
    let extras: NavigationExtras = {
      state: {
        usuario : this.usuario,
        contrasena: this.contrasena
      },
      replaceUrl: true
    }
    this.router.navigate(['cambiar-contrasena']);
  }

  irAListaEstudiantes() {
    this.router.navigate(['/student-list']);
  }

  irAListaPersonajes() {
    this.router.navigate(['/character-list']);
  }

  irAListaHechizos() {
    this.router.navigate(['/spell-list']);
  }

  irAListaLibros() {
    this.router.navigate(['/book-list']);
  }

  irAListaPeliculas() {
    this.router.navigate(['/movie-list']);
  }
  
  
  

  
  

  tienda() {
    this.router.navigate(['tienda']);
  }


}
