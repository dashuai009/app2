import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineInfoComponent } from './mine-info.component';

describe('MineInfoComponent', () => {
  let component: MineInfoComponent;
  let fixture: ComponentFixture<MineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
