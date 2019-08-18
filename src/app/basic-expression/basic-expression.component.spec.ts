import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExpressionComponent } from './basic-expression.component';

describe('BasicExpressionComponent', () => {
  let component: BasicExpressionComponent;
  let fixture: ComponentFixture<BasicExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
