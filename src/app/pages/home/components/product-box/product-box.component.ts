import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../../models/product.model';


@Component({
  selector: 'app-product-box',
  templateUrl:'./app-product-box.component.html' 
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;

  // product is een variable van type Product of undefined
  product: Product | undefined = {
    id: 2,
    title: 'Ugly Influencer',
    price: 153,
    category: 'ape',
    description: 'Spends too much time on Instagram',
    image: 'assets/images/ape2.png'
  }; 
  
  @Output() addToCart = new EventEmitter(); 
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
