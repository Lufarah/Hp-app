import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage {
  products = [
    { name: 'varitas', price: 10000, image: 'https://media.mykaramelli.com/galeria/articulos/varita-original-harry-potter_14184_1.jpg' },
    { name: 'poleron ', price: 5900 , image: 'https://th.bing.com/th/id/OIP.ERILy13TWl_KW7PR_s_IIAHaHa?w=196&h=196&c=7&r=0&o=5&pid=1.7'},
    { name: 'figuras ', price: 9900 , image: 'https://th.bing.com/th/id/OIP.j-lhpF8e095AsiiFws_TgAAAAA?rs=1&pid=ImgDetMain'},
    { name: 'llavero ', price: 3900 , image: 'https://th.bing.com/th/id/OIP.LXm9UoWDQ5OhxhIhWcJuPwHaHa?rs=1&pid=ImgDetMain'},
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('Producto añadido al carrito:', product);
  }
}
