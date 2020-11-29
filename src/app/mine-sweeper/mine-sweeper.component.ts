import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectService } from '../connect.service';
import { BrowserModule } from '@angular/platform-browser';
import { DialogService } from 'ng-devui/modal';


import '../../assets/Digit0.svg';


@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})


export class MineSweeperComponent implements OnInit {
  msgs: Array<Object> = [];//消息数组
  minVal = 1;//行（列）数最小值
  maxVal = 73;//行列数最大值
  valueX = 9;//自定义行数
  valueY = 18;//自定义列数
  cntOver = 0;//已经翻开的格子数百分比
  cntTag = 0;//已经标记的格子数百分比
  myMap: Array<Array<number>> = new Array<Array<number>>();//用来控制雷区行列，暂时没有想到好的方法
  srcMap: Array<string> = new Array<string>(75 * 75);//雷区的图片
  clickAble: Array<boolean> = new Array<boolean>(75 * 75);//格子是否可点击

  gameStatus: string;//游戏状态

  srcInit = '../../assets/dp2.svg';//初始格子的图片
  srcRight = '../../assets/dp.svg';//右键点击之后的图片
  srcD: Array<string> = new Array<string>(12);//数字图片


  radioOptions = [{//难度选择用到的按钮数值
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
    private mineHttp: ConnectService,//http服务
    private dialogService: DialogService//消息展示服务
  ) { }

  ngOnInit(): void {//组件初始化
    //document.oncontextmenu = function () { return false; };
    for (let i = 0; i < 75; i++) {
      this.myMap.push(new Array<number>());
    }
    for (let i = 0; i < 75; i++) {
      for (let j = 0; j < 75; ++j) {
        this.myMap[i].push(0);
      }
    }
    for (let i = 0; i < 75 * 75; ++i) {
      this.srcMap[i] = this.srcInit;
      this.clickAble[i] = false;//开始不可点击
    }
    for (let i = 0; i <= 9; ++i) {
      this.srcD[i] = '../../assets/Digit' + i + '.svg';
    }
  }
  openSuccessDialog(dialogtype?: string) {//展示一个成功弹窗消息
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '346px',
      maxHeight: '600px',
      showAnimate: false,
      title: '',
      content: '你完成了扫雷！',
      backdropCloseable: true,
      dialogtype: dialogtype,
      buttons: [
        {
          cssClass: 'primary',
          text: '确定',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        }
      ],
    });
  }

  openFailedDialog(dialogtype?: string) {//展示一个失败的消息弹窗
    const results = this.dialogService.open({
      id: 'dialog-service',
      width: '346px',
      maxHeight: '600px',
      showAnimate: false,
      title: '',
      content: '地雷炸掉了你的土地！',
      backdropCloseable: true,
      dialogtype: dialogtype,
      buttons: [
        {
          cssClass: 'primary',
          text: '确定',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          }
        }
      ],
    });
  }

  initMap() {//初始化地图
    this.cntOver = 0;
    this.cntTag = 0;
    this.gameStatus = "playing";
    let tmpX = this.formData.radioValue.X;
    let tmpY = this.formData.radioValue.Y;
    for (let i = 0; i < tmpX; ++i) {
      for (let j = 0; j < tmpY; ++j) {
        this.srcMap[i * tmpY + j] = this.srcInit;
        this.clickAble[i * tmpY + j] = true;
      }
    }
  }

  changeMap(result, map) {//改变地图状态
    this.gameStatus = result;
    let tmpX = this.formData.radioValue.X;
    let tmpY = this.formData.radioValue.Y;
    console.log('行列', tmpX, tmpY);
    console.log(map);
    let tot = 0;
    let tot2 = 0;
    for (let i = 0; i < tmpX; ++i) {
      for (let j = 0; j < tmpY; ++j) {
        if (map[i * tmpY + j] == -1) {
          //this.srcMap[i * tmpY + j] = this.srcInit; //未翻开的不改
          if (this.srcMap[i * tmpY + j] == this.srcRight) {
            ++tot2;
          }
          this.clickAble[i * tmpY + j] = true;
        } else {
          ++tot;
          this.srcMap[i * tmpY + j] = this.srcD[map[i * tmpY + j]];
          this.clickAble[i * tmpY + j] = false;
        }
      }
    }
    this.cntOver = tot / (tmpY * tmpX) * 100;
    this.cntTag = tot2 / this.formData.radioValue.L * 100;
    //console.log(this.srcMap);
  }
  gogogo() {//开始一局游戏
    console.log(this.formData);
    this.mineHttp.startGame(this.formData.radioValue.X, this.formData.radioValue.Y, this.formData.radioValue.L).subscribe((res) => {
      console.log(res);
      if (res.status == 'success') {
        this.initMap();
        this.showToast('success', 'GoGoGo', '开始游戏~~~');
      } else if (res.status == 'fail') {
        this.showToast('error', '错误', res.msg);
      }
    })
  }



  mine(x: number, y: number, $event) {//点击某个格子
    console.log(x, y)
    console.log($event)
    if (this.clickAble[x * this.formData.radioValue.Y + y]) {
      if (this.srcMap[x * this.formData.radioValue.Y + y] == this.srcRight) {
        this.srcMap[x * this.formData.radioValue.Y + y] = this.srcInit;
      } else {
        this.mineHttp.clickHere(x, y).subscribe((res) => {
          console.log(res);
          if (res.status == 'success') {
            if (res.msg == 'success') {
              this.openSuccessDialog('success');
            } else if (res.msg == 'fail') {
              this.openFailedDialog('failed');
            }
            this.changeMap(res.msg, res.map);
          } else {
            this.showToast('error', '错误', res.msg);
          }
        })
      }
    }
  }
  rightClick(x: number, y: number, $event) {//右键标记
    $event.preventDefault();
    if (this.cntTag + 100 / this.formData.radioValue.L > 100) {
      this.showToast('warn', '罗老师，别这样~', '标记的太多了');
    } else
      if (this.srcMap[x * this.formData.radioValue.Y + y] != this.srcRight &&
          this.clickAble[x * this.formData.radioValue.Y + y]) {
        this.srcMap[x * this.formData.radioValue.Y + y] = this.srcRight;
        this.cntTag += 100 / this.formData.radioValue.L;
      }
  }

  showToast(type: any, title: string, msg: string) {//消息
    this.msgs = [{ severity: type, summary: title, detail: msg }];
  }


}
