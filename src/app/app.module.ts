import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IpoComponent } from './ipo/ipo.component';
import { IpoquoteComponent } from './ipo/ipoquote/ipoquote.component';
import { BuynsellComponent } from './buynsell/buynsell.component';
import { BuyComponent } from './buynsell/buy/buy.component';
import { SellComponent } from './buynsell/sell/sell.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { IncomeComponent } from './income/income.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { formSubmitService } from './services/login&register.service';
import { IporegistrationService } from './services/ipo/iporegistration.service';
import { stocksService } from './services/stocks/stocks.service';
import { ServiceShopService } from './services/serviceshop.service';
import { FooterComponent } from './footer/footer.component';

import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { MutualFundregistrationService } from './services/mutual-fund/mutualfundregistration.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IpoComponent,
    IpoquoteComponent,
    BuynsellComponent,
    BuyComponent,
    SellComponent,
    ProductShopComponent,
    HomepageComponent,
    NavbarComponent,
    DashboardComponent,
    WealthComponent,
    IncomeComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    FooterComponent,
    MutualFundComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers:[
    stocksService,
    IporegistrationService,
    formSubmitService,
    ServiceShopService,
    MutualFundregistrationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
