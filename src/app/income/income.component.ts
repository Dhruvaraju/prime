import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceShopService } from '../services/serviceShop.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
})
export class IncomeComponent implements OnInit {
  userName: string = localStorage.getItem('username');
  incomeProductForm: FormGroup;
  productList: any;
  selectedProduct: any;
  serviceFailureMessage: boolean;
  productOwnedMessage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private fpService: ServiceShopService
  ) {
    this.buildIncomeForm();
  }

  /**
   * Creating form Components
   */
  buildIncomeForm() {
    this.incomeProductForm = this.formBuilder.group({
      product: ['', Validators.required],
    });
  }

  /**
   * Making initial call to get list of product details.
   * Filtering only Income products.
   */
  ngOnInit(): void {
    this.productList = this.fpService
      .fetchFinancialProductList()
      .subscribe((res) => {
        this.fpService.fetchFinancialProductList().subscribe((res) => {
          this.productList = res.filter(
            (product) => product.subcategory === 'INCOME'
          );
        });
      });
  }

  /**
   * On selecting a product from drop down its attribute values are populated.
   */
  onProductSelection() {
    this.productOwnedMessage = false;
    this.selectedProduct = this.productList.filter(
      (product) =>
        product.productID === this.incomeProductForm.get('product').value
    )[0];
  }

  /**
   * On clicking submit button this function will be triggered.
   * Request body is populated, buy service is invoked.
   * if product is owned, productOwnedMessage is set to true.
   * Else a success message is created.
   */
  onIncomeFormSubmit() {
    this.serviceFailureMessage = false;
    let selectedProductData = {
      productID: this.selectedProduct.productID,
      userName: this.userName,
    };
    this.fpService.buyFinancialProduct(selectedProductData).subscribe(
      (res) => {
        if (res.message === 'User already owned the product') {
          this.productOwnedMessage = true;
        } else {
          this.incomeProductForm.reset();
          this.selectedProduct = null;
          document.getElementById('successModal').click();
        }
      },
      (err) => {
        this.serviceFailureMessage = true;
      }
    );
  }
}
