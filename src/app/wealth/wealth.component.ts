import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InternalServices } from '../services/investments/internal.service';

@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.css'],
})
export class WealthComponent implements OnInit {
  userName: string = localStorage.getItem('username');
  productList: any;
  selectedProduct: any;
  wealthForm: FormGroup;
  serviceFailureMessage: boolean = false;
  productOwnedMessage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private financialProductService: InternalServices
  ) {
    this.buildWealthForm();
  }

  /**
   * Creating form Components
   */
  buildWealthForm() {
    this.wealthForm = this.formBuilder.group({
      product: this.formBuilder.control('', Validators.required),
    });
  }

  /**
   * Making initial call to get list of product details.
   * Filtering only Wealth products.
   */
  ngOnInit(): void {
    this.financialProductService
      .fetchFinancialProductList()
      .subscribe((res) => {
        this.productList = res.filter(
          (product) => product.subcategory === 'WEALTH'
        );
      });
  }

  /**
   * On clicking submit button this function will be triggered.
   * Request body is populated, buy service is invoked.
   * if product is owned, productOwnedMessage is set to true.
   * Else a success message is created.
   */
  onWealthFormSubmit() {
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
          this.wealthForm.reset();
          this.selectedProduct = null;
          document.getElementById('successMessage').click();
        }
      },
      (err) => {
        this.serviceFailureMessage = true;
      }
    );
  }

  /**
   * On selecting a product from drop down its attribute values are populated.
   */
  onProductSelection() {
    this.productOwnedMessage = false;
    this.selectedProduct = this.productList.filter(
      (product) => product.productID === this.wealthForm.get('product').value
    )[0];
  }
}
