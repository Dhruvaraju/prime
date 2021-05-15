import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuynsellComponent } from './buynsell/buynsell.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { RegisterComponent } from './register/register.component';
import {BuyComponent} from './buynsell/buy/buy.component';
import {SellComponent} from './buynsell/sell/sell.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buysell', component: BuynsellComponent },
  { path: 'shop', component: ProductShopComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
