import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() url: string;
  @Output() onRevert = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  revertImage() {
    this.onRevert.emit();
  }

}
