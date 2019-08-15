import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialExpressionComponent } from './special-expression.component';

describe('SpecialExpressionComponent', () => {
  let component: SpecialExpressionComponent;
  let fixture: ComponentFixture<SpecialExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
