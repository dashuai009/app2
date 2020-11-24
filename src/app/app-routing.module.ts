import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideAndContentComponent } from './aside-and-content/aside-and-content.component';
import { LoginComponent } from './login/login.component';
import { MineSweeperComponent } from './mine-sweeper/mine-sweeper.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: AsideAndContentComponent },
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
