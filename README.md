# App2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 在线扫雷游戏

## 模块、模块等说明

### header

头部，包括首页、登录、注册、游戏、主题等的跳转

### aside-and-content

首页左边抽屉式导航和主体。

### foot

页面底部，暂未使用

### login

登录模块

### signup

注册模块

### mine-sweeper

游戏模块

### theme-picker

主题选择器

### app-routing.moudle

全局路由

### connect.service

与后端通信服务，用户名和密码也缓存在这里

### debounce-click.directive

鼠标点击防抖指令

### hash2.js

SHA256

## 本地测试

- git clone https://github.com/dashuai009/app2.git
- npm i
- ng build
- 在node_modules/ng-devui/style-var/devui-var.scss中加入
  ```css

$font-title-weight: bold;
$font-content-weight: normal;

$line-height-base: 1.5;

@mixin font-content() {
  font-size: $devui-font-size;
  font-weight: $font-content-weight;
  line-height: $line-height-base;
}

@mixin font-title($font-size: $devui-font-size-page-title) {
  font-size: $font-size;
  font-weight: $font-title-weight;
  line-height: $line-height-base;
}
  ```
  如果您觉得不应改node_modules，那么，您是对的。

- ng s -o --host=0.0.0.0 --port=4200