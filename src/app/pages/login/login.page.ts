import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresar() {
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {
        usuario: this.mdl_usuario,
        contrasena: this.mdl_contrasena
      }
    }



    this.router.navigate(['principal'], extras);
  }
}
