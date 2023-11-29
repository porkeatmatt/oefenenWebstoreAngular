import { Component } from '@angular/core';

const ROWS_HEIGHT : {[id:number]: number} = {1:400, 3:350, 4:330}
//constante die hoogte bepaalt van tile afh van hoeveel tiles er zijn per row
//{1:480, 3:335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
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

 

}
