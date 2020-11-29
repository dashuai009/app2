import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgRuleComponent } from './img-rule.component';

describe('ImgRuleComponent', () => {
  let component: ImgRuleComponent;
  let fixture: ComponentFixture<ImgRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
