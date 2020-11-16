import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAndContentComponent } from './aside-and-content.component';

describe('AsideAndContentComponent', () => {
  let component: AsideAndContentComponent;
  let fixture: ComponentFixture<AsideAndContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideAndContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAndContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
