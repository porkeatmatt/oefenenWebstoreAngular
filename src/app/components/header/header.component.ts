import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart,CartItem } from '../../models/cart.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  
  //underscore is naming convention for private variable
  private _cart: Cart = {items: []};
  itemsQuantity= 0;
  
  //getter and setter
  @Input()
  get cart(): Cart{
    return this._cart
  }
  
  set cart(cart: Cart){
    console.log('_cart updated:', cart);
    this._cart = cart;

    //map returnt array met quantity van ieder item
    //reduce telt ze allemaal op
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce ((prev, current) => prev + current, 0)
  }
  
  constructor(){

  }

}
