import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.sass']
})
export class WorkItemComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() time: Date;
  @Input() cover: string;
  @Input() tech: string[];
  @Output() contentEvent = new EventEmitter<boolean>();

  isOpen = false;
  top;

  constructor() {}

  ngOnInit(): void {}

  toggleList(value) {

    if (value) {
      this.top = window.pageYOffset;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: this.top,
        left: 0,
        behavior: 'smooth'
      });
    }
    this.contentEvent.emit(value);
  }
}
