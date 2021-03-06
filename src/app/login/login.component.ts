import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DValidateRules } from 'ng-devui/form';
import { ConnectService } from '../connect.service';
import * as myhaha from '../hash2.js';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private mineHttp: ConnectService,
  ) { }

  ngOnInit(): void {
  }

  msgs: Array<Object> = [];

  existUsernames = ['test'];

  formData = {
    userName: '',
    password: '',
  };

  formRules: { [key: string]: DValidateRules } = {
    rule: { message: '表单校验不通过，请检查', messageShowType: 'text' },
    usernameRules: {
      validators: [
        { required: true, message: '用户名不能为空' },
        { minlength: 3, message: '用户名长度至少为3' },
        { maxlength: 128, message: '用户名长度不能超过128' },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/, message: '用户名请勿包含大小写字母以外其他字符' }
      ],
      asyncValidators: [
        { sameName: this.checkName.bind(this), message: '当前用户名已存在' }
      ]
    },
    passwordRules: {
      validators: [
        { required: true },
        { minlength: 6 },
        { maxlength: 15 },
        { pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/ }
      ],
      message: '请输入只包含数字字母的6-15位密码'
    }
  };

  maxUsers(num) {
    return (val) => {
      return !val || val.length <= num;
    };
  }
  submitForm({ valid, directive }) {
    //console.log(directive);
    // do something for submitting
    if (valid) {
      //console.log(this.formData);
      //console.log(myhaha.sha256_digest(this.formData.password));
      this.mineHttp.logIn(this.formData.userName, myhaha.sha256_digest(this.formData.password)).subscribe((res) => {
        console.log(res);
        if (res.status === 'success') {
          this.mineHttp.showUser(this.formData.userName,myhaha.sha256_digest(this.formData.password));
          this.showToast('success', '成功', '登陆成功');
        }else if(res.status === 'fail'){
          this.showToast('warn', '失败', res.msg);
        }
      });
    } else {
      this.showToast('error', '错误', '请检查所有校验项是否通过');
    }
  }

  checkName(value) {
    let res = true;
    if (this.existUsernames.indexOf(value) !== -1) {
      res = false;
    }
    return of(res).pipe(delay(500));
  }

  showToast(type: any, title: string, msg: string) {
    this.msgs = [{ severity: type, summary: title, detail: msg }];
  }

}

