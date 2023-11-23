import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  cols = 3;

  selectedCategoriesParent: string[] = [];

  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum;
  }

  onSelectedCategoriesChange(selectedCategories: string[]) {

    this.selectedCategoriesParent = selectedCategories;

    console.log('Selected Categories in Parent:', selectedCategories);
  }

 

}
