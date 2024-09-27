import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  carrito() {

    this.router.navigate(['carrito']);
  }
}
