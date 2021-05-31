
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IpoComponent } from './ipo/ipo.component';
import { BuynsellComponent } from './buynsell/buynsell.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BuyComponent } from './buynsell/buy/buy.component';
import { SellComponent } from './buynsell/sell/sell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { WealthComponent } from './product-shop/wealth/wealth.component';
=======
import { StocksService } from './services/stocks.service';


>>>>>>> 78cc24ebc077cf774acb37984963fd1c90c44293

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IpoComponent,
    BuynsellComponent,
    ProductShopComponent,
    HomepageComponent,
    BuyComponent,
    SellComponent,
    DashboardComponent,
<<<<<<< HEAD
    WealthComponent
=======
    
>>>>>>> 78cc24ebc077cf774acb37984963fd1c90c44293
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
