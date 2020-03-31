import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.sass']
})
export class WorkItemComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() description: string;
  @Input() time: Date;
  @Input() cover: string;
  @Input() link: string;
  @Input() tech: string[];
  @Output() contentEvent = new EventEmitter<boolean>();

  isOpen = false;
  top;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initPopup();
  }

  initPopup() {
    $('.tech').popup();
  }

  changeTitle(name) {
    switch (name) {
      case 'angular': return 'Angular 8+';
      case 'vue': return 'Vue';
      case 'nuxt': return 'Nuxt';
      case 'react': return 'React';
      case 'rn': return 'React Native';
      case 'pwa': return 'Progressive Web Application';
      case 'ios': return 'iOS';
      case 'map': return 'GIS Map';
      case 'websocket': return 'Web Socket';
      case 'firebase': return 'Firebase';
    }
  }
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

  goRoute(link) {
    if (link) {
      window.location.href = link;
    }
  }
}
