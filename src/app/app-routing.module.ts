import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideAndContentComponent } from './aside-and-content/aside-and-content.component';
import { LoginComponent } from './login/login.component';
import { MineSweeperComponent } from './mine-sweeper/mine-sweeper.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MineInfoComponent } from './aside-and-content/mine-info/mine-info.component';
import { RuleComponent } from './aside-and-content/rule/rule.component';
import {ImgRuleComponent} from './aside-and-content/img-rule/img-rule.component';
import { UserComponent } from './aside-and-content/user/user.component';

const routes: Routes = [
  {
    path: '', component: AsideAndContentComponent,
    children: [
      {
        path: 'info',
        component: MineInfoComponent,
      },
      {
        path: 'rule',
        component: RuleComponent,
      },
      {
        path:'imgRule',
        component:ImgRuleComponent,
      },
      {
        path:'user',
        component:UserComponent,
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'minesweeper', component: MineSweeperComponent },
  { path: '**', component: AsideAndContentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
