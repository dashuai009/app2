import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// DevUI部分组件依赖angular动画，需要引入animations模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevUIModule } from 'ng-devui';


import { ThemePickerModule } from './theme-picker/theme-picker.module';
import { HeaderComponent } from './header/header.component';
import { AsideAndContentComponent } from './aside-and-content/aside-and-content.component';
import { FootComponent } from './foot/foot.component';
import { AppRoutingModule } from './app-routing.module';
import { MineSweeperComponent } from './mine-sweeper/mine-sweeper.component';

import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideAndContentComponent,
    FootComponent,
    MineSweeperComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DevUIModule,
    ThemePickerModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
