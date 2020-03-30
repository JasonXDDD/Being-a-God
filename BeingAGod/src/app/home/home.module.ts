import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WorkItemComponent } from './work-item/work-item.component';
import { SkillBubbleChartComponent } from './skill-bubble-chart/skill-bubble-chart.component';
import { EventTimeLineComponent } from './event-time-line/event-time-line.component';


@NgModule({
  declarations: [HomeComponent, WorkItemComponent, SkillBubbleChartComponent, EventTimeLineComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
