import { Component } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  //property binding [cart] in de header aan "cart" in de app.component
  template: `
    <app-header [cart]="cart"></app-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  cart: Cart = { items: []};

  constructor(private cartService: CartService){

  }

  ngOnInit(){
    //we subscriben de local cart variable op de serviceCart
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
    });
  }
}
