import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-rule',
  templateUrl: './img-rule.component.html',
  styleUrls: ['./img-rule.component.scss']
})
export class ImgRuleComponent implements OnInit {
  // imageUrl 数组
  imageArray = ['../../../assets/img/fail.png',
    '../../../assets/img/home.png',
    '../../../assets/img/mine.png',
    '../../../assets/img/success.png'];
  height = '500px';
  autoplay = true;
  autoplaySpeed = '3000';

  constructor() { }

  ngOnInit(): void {
  }

}

export class CarouselDemoAutoPlayComponent {

}