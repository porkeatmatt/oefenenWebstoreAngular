import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: ``
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  //stuurt data van deze component naar parents via een evenEmitter die je hier aanmaakt
  //columnsCountChange is de naam vd variable die je in de parent zal gebruiken
  sort='desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }
  
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
