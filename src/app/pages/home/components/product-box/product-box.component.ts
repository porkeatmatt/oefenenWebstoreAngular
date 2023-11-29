import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl:'./app-product-box.component.html' 
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
}
