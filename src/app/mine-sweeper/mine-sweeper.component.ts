import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TableWidthConfig } from 'ng-devui/data-table';
import { FormControl } from '@angular/forms';
import { ConnectService } from '../connect.service';


@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})

/**
 * @author 杨松恺
 * @date 2018-12-05 15:45:08
 * 定义二维数组，提供相关操作
 */
/*
class My2DArray {
  private my2DArray: Array<Array<number>> = new Array<Array<number>>();
  private rows: number;
  private columns: number;

 
   初始化数组

  public constructor(rows: number, columns: number, value: number) {
    this.rows = rows;
    this.columns = columns;
    this.initRows(rows);
    this.initColumns(columns, value);
  }
 
   取数组中的值
   
  public getValue(rows: number, columns: number): number {
    if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
      return null;
    }
    return this.my2DArray[rows][columns];
  }
 
 为数组赋值
 
  public setValue(rows: number, columns: number, value: number): void {
    if (rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns) {
      return;
    }
    this.my2DArray[rows][columns] = value;
  }

    初始化行数
 
  private initRows(rows: number): void {
    if (rows < 1) {
      return;
    }
    for (let i = 0; i < rows; i++) {
      this.my2DArray.push(new Array<number>());
    }
  }
  
    初始化列数

  private initColumns(columns: number, value: number): void {
    if (columns < 1) {
      return;
    }
    for (let i = 0; i < this.my2DArray.length; i++) {
      for (let j = 0; j < columns; j++) {
        this.my2DArray[i].push(value);
      }
    }
  }

    获取数组

  public getArray(): Array<Array<number>> {
    return this.my2DArray;
  }
}
*/

export class MineSweeperComponent implements OnInit {
  minVal = 5;
  maxVal = 73;
  valueX = 9;
  valueY = 18;
  myMap: Array<Array<number>> = new Array<Array<number>>();


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
    private mineHttp:ConnectService
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
  }
  gogogo() {
    console.log(this.formData);
    console.log(this.formData.radioValue.id === 4);
  }

  mine(x: number, y: number) {
    if(this.myMap[x][y]==3){


    }else if(this.myMap[x][y]==2){

    }
  }

}
