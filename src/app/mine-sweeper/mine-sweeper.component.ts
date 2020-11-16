import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mine-sweeper',
  templateUrl: './mine-sweeper.component.html',
  styleUrls: ['./mine-sweeper.component.scss']
})
export class MineSweeperComponent implements OnInit {
  minVal = 5;
  maxVal = 73;
  valueX = 9;
  valueY = 18;

  selectOptions = [{
    id: 1,
    label: "简单：7行7列，10颗雷~"
  }, {
    id: 2,
    label: "中等：14行14列，30颗雷~~"
  }, {
    id: 3,
    label: "复杂：20行20列，50颗雷~~~"
  }, {
    id: 4,
    label: "自定义：5~73行5~73列，1~73*73颗雷~~~"
  }];

  radioOptions = [{
    id: 1,
    label: "简单",
    msg: "简单：7行7列，10颗雷~"
  }, {
    id: 2,
    label: "中等",
    msg:"中等：14行14列，30颗雷~~"
  }, {
    id: 3,
    label: "复杂",
    msg: "复杂：20行20列，50颗雷~~~"
  }, {
    id: 4,
    label: "自选！",
    msg: "自定义：5~73行5~73列，1~73*73颗雷~~~"
  }];
  formData = {
    selectValue: this.selectOptions[1],

    radioValue:this.radioOptions[0]
  };
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }
  gogogo(){
    console.log(this.formData);
    console.log(this.formData.radioValue.id===4);
  }

}
