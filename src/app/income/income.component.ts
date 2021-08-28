import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternalServices } from '../services/investments/internal.service';

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
    private financialProductService: InternalServices
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
    this.productList = this.financialProductService
      .fetchFinancialProductList()
      .subscribe((res) => {
        this.financialProductService
          .fetchFinancialProductList()
          .subscribe((res) => {
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
      userName: this.userName,
      productName: this.selectedProduct.productName,
      productID: this.selectedProduct.productID,
      productType: this.selectedProduct.productType,
      subcategory: this.selectedProduct.subcategory,
      buyPrice: this.selectedProduct.buyPrice,
      marketPrice: this.selectedProduct.marketPrice,
      quantity: 1
    };
    this.financialProductService.buyProduct(selectedProductData).subscribe(
      (res) => {
        if (res.status === 'EXISTS') {
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
