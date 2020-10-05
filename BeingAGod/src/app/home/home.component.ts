import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  bannerList = [
    '/assets/image/banner/banner-1.jpg',
    '/assets/image/banner/banner-2.jpg',
    '/assets/image/banner/banner-3.jpg',
    '/assets/image/banner/banner-4.jpg',
  ];
  workList = [
    {
      title: 'Diet Calendar',
      description: '透過每日打卡控制飲食與朋友分享',
      content: `Side Project，當時開始低醣飲食計畫，想要一個能夠記錄飲食的 APP，又不想花錢去購買其 APP，而隨手做的一個 PWA APP。\n
      主要使用 Firebase 做為資料庫，並透過 Angular 實作 PWA 並使用手機的功能：相機、推波... 等。`,
      cover: '/assets/image/work/diet-calendar.png',
      time: '2020-03',
      link: 'https://diet-jasonxddd.web.app',
      tech: ['pwa', 'angular', 'firebase'],
    },
    {
      title: '從前從前',
      description: '參加 APPLE 移動應用創新賽 得獎作品',
      content: `2019 得獎作品，碩班期間參加 APPLE 舉辦 "移動應用創新賽" 的得獎作品。\n
      我們主要為小朋友打造一個自由創作故事的創作器，可以與爸爸媽媽一起創作屬於自己的故事。\n
      裡頭藏有許多小驚喜與技術，像是使用 AR, Siri, 手繪畫圖, 錄影音...等，使 APP 充滿活力與樂趣。`,
      cover: '/assets/image/work/once-upon-a-time.png',
      time: '2020-03',
      link: 'http://jasonxddd.nctu.me',
      tech: ['rn', 'ios'],
    },
    {
      title: 'MyProGuide',
      description: '前公司官網',
      cover: '/assets/image/work/myproguide.png',
      time: '2020-03',
      link: 'https://www.myproguide.com',
      tech: ['pwa', 'angular'],
    },
    {
      title: 'MyProGuide Tour',
      description: '前公司旅遊購物平台',
      cover: '/assets/image/work/myproguide-tour.png',
      time: '2020-03',
      link: 'https://tour.myproguide.com',
      tech: ['pwa', 'nuxt'],
    },
    {
      title: 'TaiPower',
      description: '台電故障線路定位系統',
      cover: '/assets/image/work/taipower.png',
      time: '2020-03',
      link: '',
      tech: ['pwa', 'angular', 'firebase', 'map'],
    },
    {
      title: '自動化工廠',
      description: '搭配工廠機器回傳數據顯示平台',
      cover: '/assets/image/work/auto-factory.png',
      time: '2020-03',
      link: '',
      tech: ['react', 'websocket'],
    }
  ];

  skillList = [
    { group: 'skill', name: 'FrontEnd', value: 50},
    { group: 'skill', name: 'UI/UX', value: 30},
    { group: 'skill', name: 'APP', value: 30},
    { group: 'skill', name: 'Manager', value: 20},
  ];

  eventList = [
    { type: 'time', time: '2020.07', event: '研究所畢業，並取得 “北教大 玩遊所” 碩士學位'},
    { type: 'work', time: '2020.04', event: 'Leadtek 入職'},
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

  isMobile = false;
  constructor(private deviceService: DeviceDetectorService, private router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element: any = document.querySelector('#' + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });
  }

  ngOnInit(): void {
    // this.initGitHubCalendar();
    this.isMobile = this.deviceService.isMobile();
  }

  initGitHubCalendar() {
    GitHubCalendar('#github', 'JasonXDDD', {
      global_stats:  false,
      summary_text: '.',
      responsive: true,
    });
  }

  setContent(da) {

  }

}
