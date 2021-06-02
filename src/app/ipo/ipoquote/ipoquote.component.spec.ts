import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoquoteComponent } from './ipoquote.component';

describe('IpoquoteComponent', () => {
  let component: IpoquoteComponent;
  let fixture: ComponentFixture<IpoquoteComponent>;

  beforeEach(async(() => {
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
