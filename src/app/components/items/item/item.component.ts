import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from './item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: IItem;

  url = 'http://api.adorable.io/avatar/200/leo';

  constructor() { }

  ngOnInit() {
  }

  changeImage() {
    this.url = 'http://api.adorable.io/avatar/200/car';
  }
  revertImage() {
    this.url = 'http://api.adorable.io/avatar/200/leo';
  }

}
