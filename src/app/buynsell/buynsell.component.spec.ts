import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynsellComponent } from './buynsell.component';

describe('BuynsellComponent', () => {
  let component: BuynsellComponent;
  let fixture: ComponentFixture<BuynsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuynsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuynsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
