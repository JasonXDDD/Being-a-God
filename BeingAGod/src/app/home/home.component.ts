import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  workList = [
    {
      title: 'Diet Calendar',
      description: '透過每日打卡控制飲食與朋友分享',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['Angular', 'PWA', 'Firebase'],
    }
  ];

  skillList = [
    { group: 'skill', name: 'FrontEnd', value: 50},
    { group: 'skill', name: 'UI/UX', value: 30},
    { group: 'skill', name: 'APP', value: 30},
    { group: 'skill', name: 'Manager', value: 20},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setContent(da) {

  }

}
