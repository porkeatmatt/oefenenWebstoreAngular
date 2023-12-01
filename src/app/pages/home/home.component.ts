import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { products as externalProducts} from '../../data/animals.data';

const ROWS_HEIGHT : {[id:number]: number} = {1:400, 3:350, 4:330}
//constante die hoogte bepaalt van tile afh van hoeveel tiles er zijn per row
//{1:480, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  importedProducts: Product [] = [];
  
  //dependancy injection van een service via constructor
  constructor(private cartService: CartService){}
  
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  
  selectedCategoriesParent: string[] = [];

  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSelectedCategoriesChange(selectedCategories: string[]) {
    this.selectedCategoriesParent = selectedCategories;
  }

  //we ontvangen Product object van product-box-component
  onAddToCart(product: Product): void{
    //We vertalen het ontvangen object van type Product naar object van type CartItem
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }
  
  ngOnInit(){
    this.importedProducts = externalProducts;
  }

}

  // products: Product[] = [
  //   {
  //     id: 1,
  //     title: 'Ugly Detective',
  //     price: 358.85,
  //     category: 'ape',
  //     description: 'Very popular on social media',
  //     image: 'assets/images/ape1.png',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ugly Influencer',
  //     price: 69.69,
  //     category: 'ape',
  //     description: 'Spends too much time on Instagram',
  //     image: 'assets/images/ape2.png',
  //   },
    
  // ];



  //export interface Product {
    // id:number;
    // title: string;
    // price: number;
    // category: string;
    // description: string;
    // image: string;

    
// export interface CartItem {
//   product: string;
//   name: string;
//   price: number;
//   quantity: number;
//   id: number;

// 
