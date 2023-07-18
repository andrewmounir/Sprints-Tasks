import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-root',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class ProductsFilterComponent{
   @Input() featuredCount:number = 0;
   @Input() availableCount:number = 0;
   @Input() all:number = 0;
   filter:string = "All";

  @Output() filterChangedEvent: EventEmitter<string> = new EventEmitter();

   onFilterChanged():void{
    this.filterChangedEvent.emit(this.filter);
   }
}