import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuynsellComponent } from './buynsell/buynsell.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IpoComponent } from './ipo/ipo.component';
import { LoginComponent } from './login/login.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { RegisterComponent } from './register/register.component';
import { BuyComponent } from './buynsell/buy/buy.component';
import { SellComponent } from './buynsell/sell/sell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WealthComponent } from './wealth/wealth.component';
import { IncomeComponent } from './income/income.component';
import { IpoquoteComponent } from './ipo/ipoquote/ipoquote.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buysell', component: BuynsellComponent },
  { path: 'shop', component: ProductShopComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'ipo', component: IpoComponent },
  { path: 'ipoquote', component : IpoquoteComponent},
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'wealth', component: WealthComponent },
  { path: 'income', component: IncomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
