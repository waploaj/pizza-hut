import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzastatusComponent } from './pizzastatus.component';

describe('PizzastatusComponent', () => {
  let component: PizzastatusComponent;
  let fixture: ComponentFixture<PizzastatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzastatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzastatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
