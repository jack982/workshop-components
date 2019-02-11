import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-collapsable',
  template: `
  <div class="card">
  <div class="card-header" (click)="toggle.emit()">
    {{title}}
  </div>
  <div class="card-body" [ngClass]="{ 'd-none' : !opened }">
    <ng-content></ng-content>
  </div>
</div>
  `,
  styles: []
})
export class CollapsableComponent implements OnInit {

  @Input() title: string;
  @Input() opened: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
