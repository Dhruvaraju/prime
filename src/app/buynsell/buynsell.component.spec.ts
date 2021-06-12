import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuynsellComponent } from './buynsell.component';

describe('BuynsellComponent', () => {
  let component: BuynsellComponent;
  let fixture: ComponentFixture<BuynsellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BuynsellComponent],
    }).compileComponents();
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
