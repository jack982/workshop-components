import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  template: `
  <ul class="nav nav-tabs">
    <li class="nav-item" *ngFor="let i of items">
      <a class="nav-link"
       [ngClass]="{ 'active' : i === active }"
       (click)="tabSelected.emit(i)">{{ i.name }}
      </a>
    </li>
  </ul>
  `,
  styles: []
})
export class TabBarComponent implements OnInit {

  @Input() items: Array<any>;
  @Input() active: any;
  @Output() tabSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
