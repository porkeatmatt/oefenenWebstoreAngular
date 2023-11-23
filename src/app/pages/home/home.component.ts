import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  cols = 3;

  onColumsCountChange(colsNum: number): void{
    this.cols = colsNum;
  }

  onSelectedCategoriesChange(selectedCategories: string[]) {
    console.log('Selected Categories in Parent:', selectedCategories);
  }

 

}
