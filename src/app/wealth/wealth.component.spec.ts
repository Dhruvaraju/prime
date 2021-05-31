import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthComponent } from './wealth.component';

describe('WealthComponent', () => {
  let component: WealthComponent;
  let fixture: ComponentFixture<WealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
