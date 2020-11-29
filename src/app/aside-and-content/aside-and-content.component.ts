import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-aside-and-content',
  templateUrl: './aside-and-content.component.html',
  styleUrls: ['./aside-and-content.component.scss']
})
export class AsideAndContentComponent implements OnInit {
  menu = [
    {
      title: '游戏介绍',
      open: true,
      children: [{ title: '百度百科' ,link:'./info'}],
    },
    {
      title: '游戏规则',
      open:true,
      children: [{ title: '规则' ,link:'./rule'}, { title: '图片' ,link:'./imgRule'},{ title: '用户使用手册' ,link:'./user'}],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
