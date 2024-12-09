import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  items: Product[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }
}
