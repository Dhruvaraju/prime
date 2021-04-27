import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShopComponent } from './product-shop.component';

describe('ProductShopComponent', () => {
  let component: ProductShopComponent;
  let fixture: ComponentFixture<ProductShopComponent>;

  beforeEach(async(() => {
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
