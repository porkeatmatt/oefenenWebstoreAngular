import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  cols = 3;
  selectedCategory: string | undefined;

  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum;
  }

  handleCategory(NewCategory: string): void {
    console.log('Category received in parent:', NewCategory);
    this.selectedCategory = NewCategory;
  }

}
