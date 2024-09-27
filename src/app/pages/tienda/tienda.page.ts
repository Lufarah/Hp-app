import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  carrito() {

    this.router.navigate(['carrito']);
  }

}
