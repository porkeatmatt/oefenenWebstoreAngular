import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent {
  @Output() selectedCategoriesChange = new EventEmitter<string[]>();

  categories: string[] = ['Ugly Apes', 'Ugly Lions'];
  selectedCategories: string[] = [];

  onSelectionChange() {
    this.selectedCategoriesChange.emit(this.selectedCategories);
    console.log('Selected Categories in Child:', this.selectedCategories);
  }

}
