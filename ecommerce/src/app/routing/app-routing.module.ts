import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from '../components/search/search.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartDetailsComponent } from '../components/cart-details/cart-details.component';
import { VideogamesComponent } from '../components/videogames/videogames.component';
import { GameConsolesComponent } from '../components/game-consoles/game-consoles.component';
import { ControllersComponent } from '../components/controllers/controllers.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';

import { CollectiblesComponent } from '../components/collectibles/collectibles.component';
import { PcGamingComponent } from '../components/pc-gaming/pc-gaming.component';
import { HeaderComponent } from '../components/header/header.component';
import { HomeComponent } from '../components/home/home.component';
import { SaleComponent } from '../components/sale/sale.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'search-results', component: SearchComponent },
  { path: 'search-results/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'videogames', component: VideogamesComponent }, 
  { path: 'gameconsoles', component: GameConsolesComponent },
  { path: 'controllers', component: ControllersComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'cart-details', component: CartDetailsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
