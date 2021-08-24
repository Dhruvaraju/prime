import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/routerGuards/auth.guard';
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
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MutualFundComponent } from './mutual-fund/mutual-fund.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'buysell', component: BuynsellComponent, canActivate: [AuthGuard] },
  { path: 'buy', component: BuyComponent, canActivate: [AuthGuard] },
  { path: 'sell', component: SellComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ProductShopComponent, canActivate: [AuthGuard] },
  { path: 'ipo', component: IpoComponent, canActivate: [AuthGuard] },
  { path: 'ipoquote', component: IpoquoteComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'wealth', component: WealthComponent, canActivate: [AuthGuard] },
  { path: 'income', component: IncomeComponent, canActivate: [AuthGuard] },
  {
    path: 'mutual fund',
    component: MutualFundComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
