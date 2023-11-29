import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  //BehaviorSubject is een observable die een waarde bijhoudt
  //De observable zal values uitzenden van het type Cart
  //de lege items array is de beginwaarde die geupdate wordt
  cart = new BehaviorSubject<Cart>({items: []});
  

  
  //dependancy injection: we declareren een private property genaamd "_snackBar" 
  //van type MatSnackBar, private maakt het alleen bruikbaar in deze klasse
  //MatSnackBar toont notificaties
  constructor(private _snackBar: MatSnackBar) { 
    
  }

  addToCart(item: CartItem): void {
      //we maken een nieuwe array genaamd items gevuld met de items die al in de property cart zitten
      // '...' is een operator die een shallow copy maakt van items array, dit verhindert dat je
      // originele array aanpast en zorgt voor immutability
      const items = [...this.cart.value.items];
      
      //find() is een array method waarbij je het eerste element zoekt die voldoet aan een bepaalde voorwaarde
      //_item staat voor ieder element in de items array, er wordt erover geitereerd
      //resultaat wordt toegewezen aan itemsIncart, als hij geen match vindt wordt de variable undefined
      const itemInCart = items.find((_item) => _item.id === item.id); 
    
      //als itemIncart niet undefined is, gwn quantity verhogen anders items aanvullen
      if (itemInCart){
        itemInCart.quantity += 1;
      }else {
        items.push(item)
      }

      //next() is een methode van Observables die een nieuwe value uitzendt
      //{items: items} je creert een object genaamd items en wijst de al bestaande array er aan toe
      //je gebruikt deze methode om aan te geven dat de staat vd cart is geupdate
      this.cart.next({items: items})

      //Toont notificatie die je kan sluiten of zichzelf sluit na 3 sec
      this._snackBar.open('1 item added to cart', 'close', {duration: 3000});

    
    }

  
}
