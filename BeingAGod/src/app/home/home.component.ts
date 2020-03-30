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
    },
    {
      title: '從前從前',
      description: '故事創作器，參加 APPLE 移動應用創新賽 得獎作品',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['RN', 'iOS'],
    },
    {
      title: 'MyProGuide',
      description: '前公司官網',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['Angular', 'PWA'],
    },
    {
      title: 'MyProGuide Tour',
      description: '前公司旅遊購物平台',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['Nuxt', 'PWA'],
    },
    {
      title: 'TaiPower',
      description: '台電故障線路定位系統',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['Angular', 'PWA', 'Firebase', 'Map'],
    },
    {
      title: '自動化工廠',
      description: '搭配工廠機器回傳數據顯示平台',
      cover: 'http://www.bara-art.com/wp-content/uploads/2016/09/construction_from_sky.jpg',
      time: '2020-03',
      tech: ['React', 'Websocket'],
    }
  ];

  skillList = [
    { group: 'skill', name: 'FrontEnd', value: 50},
    { group: 'skill', name: 'UI/UX', value: 30},
    { group: 'skill', name: 'APP', value: 30},
    { group: 'skill', name: 'Manager', value: 20},
  ];

  eventList = [
    { type: 'time', time: '2020.03', event: `攻讀研究所，至今前端有${Number(moment().format('YYYY')) - 2015}年經驗`},
    { type: 'award', time: '2019.10', event: '參加 APPLE 移動應用創新賽中國賽 第二名'},
    { type: 'award', time: '2019.08', event: '參加 APPLE 移動應用創新賽台灣賽 第一名'},
    { type: 'work', time: '2019.08', event: 'MyProGuide 離職'},
    { type: 'group', time: '2018.10', event: '創辦 EXD X NTUE 前端聚'},
    { type: 'time', time: '2018.06', event: '大學畢業，繼續攻讀研究所'},
    { type: 'group', time: '2017.08', event: '大三，創辦 資工系計算中心'},
    { type: 'work', time: '2017.05', event: '大三，進入 MyProGuide 擔任前端工程師'},
    { type: 'group', time: '2016.09', event: '大二，創辦 EXD 前端聚'},
    { type: 'work', time: '2016.04', event: '大二，與朋友組隊接案'},
    { type: 'time', time: '2015.09', event: '大一，進入前端領域與學習'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setContent(da) {

  }

}
