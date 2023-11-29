import { Component } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent {
  dataSource: Array<CartItem> = [];

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
    return items.
      map((item) => item.price * item.quantity)
      //loop doorheen items en vermenigvuldig de prijs en hoeveelheid
      .reduce((prev, current) => prev + current, 0)
      //voeg ieder element toe aan vorige, init value is 0
  }  
    

  ngOnInit(): void{
    this.dataSource = this.cart.items
  }
}
