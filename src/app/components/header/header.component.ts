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
  
  // @Input bindt nu cart van app.comp met de property hier via getter/setter
  @Input()
  get cart(): Cart{
    return this._cart
  }
  
  set cart(cart: Cart){
    
    this._cart = cart;

    //map returnt array met quantity van ieder item
    //reduce telt ze allemaal op
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce ((prev, current) => prev + current, 0)
  }
  
  //private betekent dat je de service alleen in ts file kan gebruiken niet in HTML
  constructor(private cartService: CartService){

  }

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }

  onClearCart(): void{
    this.cartService.clearCart();
  }

  

}
