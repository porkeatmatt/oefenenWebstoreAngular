import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart,CartItem } from '../../models/cart.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  cartItems: CartItem[] = [];  
  
  constructor (private cartService: CartService){

      }

    ngOnInit(): void {
      this.cartService.cart.subscribe(cart => {
        console.log('Cart updated:', cart);
        this.cartItems = cart.items;
      });
    }
}
