import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-time-line',
  templateUrl: './event-time-line.component.html',
  styleUrls: ['./event-time-line.component.sass']
})
export class EventTimeLineComponent implements OnInit {

  @Input() eventList: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
