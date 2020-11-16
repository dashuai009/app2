import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideAndContentComponent } from './aside-and-content/aside-and-content.component';
import{MineSweeperComponent}from './mine-sweeper/mine-sweeper.component';

const routes: Routes = [
  { path: '', component: AsideAndContentComponent },
  { path: 'minesweeper', component: MineSweeperComponent},
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
