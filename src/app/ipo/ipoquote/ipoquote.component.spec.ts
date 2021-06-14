import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IpoquoteComponent } from './ipoquote.component';

describe('IpoquoteComponent', () => {
  let component: IpoquoteComponent;
  let fixture: ComponentFixture<IpoquoteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
