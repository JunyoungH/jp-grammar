import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialGrammarComponent } from './essential-grammar.component';

describe('EssentialGrammarComponent', () => {
  let component: EssentialGrammarComponent;
  let fixture: ComponentFixture<EssentialGrammarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialGrammarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialGrammarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
