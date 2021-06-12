import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IpoComponent } from './ipo.component';

describe('IpoComponent', () => {
  let component: IpoComponent;
  let fixture: ComponentFixture<IpoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
