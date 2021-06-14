import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductShopComponent } from './product-shop.component';

describe('ProductShopComponent', () => {
  let component: ProductShopComponent;
  let fixture: ComponentFixture<ProductShopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
