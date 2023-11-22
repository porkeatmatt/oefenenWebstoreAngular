import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>(); 

  categories: string[] = ['shoes', 'sports'];

  onShowCategory(category: string): void{
    this.showCategory.emit(category);
    console.log("deze functie werkt")
  }

  logToConsole(): void {
    console.log('Button clicked! Log message from the component.');
  }

}
