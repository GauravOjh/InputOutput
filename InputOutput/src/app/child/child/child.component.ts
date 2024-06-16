import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

import { Item } from '../../model/item';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit  {
 @Input()
  items:Item[] = [];

  @Output()
  selectedItemEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  selectItem(item: any) {
    this.selectedItemEmitter.emit(item);
  }
}
