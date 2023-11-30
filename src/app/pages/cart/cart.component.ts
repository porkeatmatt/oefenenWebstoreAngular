import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent {
  dataSource: Array<CartItem> = [];

  constructor(private cartService: CartService){

  }

  cart: Cart = { items: [ {
    product: 'assets/images/ape1.png',
    name: 'Ugly Detective',
    price: 223.54,
    quantity: 1,
    id: 1
    },
    {
      product: 'assets/images/ape1.png',
      name: 'Ugly Detective',
      price: 223.54,
      quantity: 1,
      id: 1
    },
    {
      product: 'assets/images/ape1.png',
      name: 'Ugly Detective',
      price: 223.54,
      quantity: 1,
      id: 1
    }
  ]};

  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    //id,
    'action'
  ]

  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }  
    

  ngOnInit(): void{
    this.dataSource = this.cart.items
  }
}
