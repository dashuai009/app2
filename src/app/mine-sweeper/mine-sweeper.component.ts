import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectService } from '../connect.service';
import { BrowserModule } from '@angular/platform-browser';

import '../../assets/Digit0.svg';


@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})


export class MineSweeperComponent implements OnInit {
  msgs: Array<Object> = [];
  minVal = 1;
  maxVal = 73;
  valueX = 9;
  valueY = 18;
  myMap: Array<Array<number>> = new Array<Array<number>>();
  srcMap: Array<string> = new Array<string>(75 * 75);

  gameStatus: string;

  srcInit = '../../assets/dp2.svg';
  srcD: Array<string> = new Array<string>(12);


  radioOptions = [{
    id: 1,
    label: "简单",
    msg: "简单：7行7列，10颗雷~",
    X: 7, Y: 7, L: 10
  }, {
    id: 2,
    label: "中等",
    msg: "中等：14行14列，30颗雷~~",
    X: 14, Y: 14, L: 30
  }, {
    id: 3,
    label: "复杂",
    msg: "复杂：20行20列，50颗雷~~~",
    X: 20, Y: 20, L: 50
  }, {
    id: 4,
    label: "自选！",
    msg: "自定义：5~73行5~73列，1~73*73颗雷~~~",
    X: 10, Y: 10, L: 20

  }];
  formData = {
    radioValue: this.radioOptions[0]
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private mineHttp: ConnectService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.myMap.push(new Array<number>());
    }
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 25; ++j) {
        this.myMap[i].push(0);
      }
    }
    for (let i = 0; i < 75 * 75; ++i) {
      this.srcMap[i] = this.srcInit;
    }
    for (let i = 0; i <=9; ++i) {
      this.srcD[i] = '../../assets/Digit' + i + '.svg';
    }
  }
  changeMap(a) {
    this.gameStatus = a.result;
    let tmpX = this.formData.radioValue.X;
    let tmpY = this.formData.radioValue.Y;
    console.log('行列', tmpX, tmpY);
    console.log(a);
    for (let i = 0; i < tmpX; ++i) {
      for (let j = 0; j < tmpY; ++j) {
        if (a.map[i * tmpY + j] == -1) {
          this.srcMap[i * tmpY + j] = this.srcInit;
        } else {
          this.srcMap[i * tmpY + j] = this.srcD[a.map[i * tmpY + j]];
        }
      }
    }
    //console.log(this.srcMap);
  }
  gogogo() {
    console.log(this.formData);
    this.mineHttp.startGame(this.formData.radioValue.X, this.formData.radioValue.Y, this.formData.radioValue.L).subscribe((res) => {
      console.log(res);
      if (res.status == 'success') {
        this.changeMap(res.msg);
        this.showToast('success', 'GoGoGo', '开始游戏~~~');
      } else if (res.status == 'fail') {
        this.showToast('error', '错误', res.msg);
      }
    })
  }

  mine(x: number, y: number, $event) {
    console.log(x, y)
    console.log($event.target)
    this.mineHttp.clickHere(x,y).subscribe((res)=>{
      console.log(res);
      if(res.status=='success'){
        this.changeMap(res.msg);  
      }else{
        this.showToast('error', '错误', res.msg);
      }
    })

  }

  showToast(type: any, title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }];
  }


}
