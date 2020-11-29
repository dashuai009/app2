import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AsideAndContentComponent } from './aside-and-content.component';
import { MineInfoComponent } from './mine-info/mine-info.component';
import { RuleComponent } from './rule/rule.component';

const childRoutes: Routes = [
  {
    path: 'home',
    component: AsideAndContentComponent,
    children: [
      {
        path: '/info',
        component: MineInfoComponent,
      },
      {
        path: '/rule',
        component: RuleComponent,
      }
    ]
  }
];
@NgModule({

  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
