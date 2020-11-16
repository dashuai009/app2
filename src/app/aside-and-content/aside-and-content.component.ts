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
      title: '内容一',
      open: true,
      children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容二',
      children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容三（默认展开）',
      open: true,
      children: [{ title: '子内容1(禁用)', disabled: true }, { title: '子内容2(默认激活)', active: true }, { title: '子内容3' }],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

}
