import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'filter-textbox',
  template: `
      <!--  Filter: <input type="text" [value]="filter" (input)="filter=$event.target.value" >-->
      Filter: <input type="text" [(ngModel)]="filter" >
    `
})
export class FilterTextboxComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }
  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {

  }
}

