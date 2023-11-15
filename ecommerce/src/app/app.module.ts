import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routing/app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { VideogamesComponent } from './components/videogames/videogames.component';
import { GameConsolesComponent } from './components/game-consoles/game-consoles.component';
import { ControllersComponent } from './components/controllers/controllers.component';
import { CollectiblesComponent } from './components/collectibles/collectibles.component';
import { PcGamingComponent } from './components/pc-gaming/pc-gaming.component';
import { ItemQuantityComponent } from './components/item-quantity/item-quantity.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import { MockProductService } from './services/mock-product.service';
import { SearchComponent } from './components/search/search.component';
import { SaleComponent } from './components/sale/sale.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
   
    CarouselComponent,
    ProductCardComponent,
    LoginComponent,
    RegistrationComponent,

    VideogamesComponent,
    GameConsolesComponent,
    ControllersComponent,
    CollectiblesComponent,
    PcGamingComponent,
    ItemQuantityComponent,
    ProductListComponent,
    SearchComponent,
    SaleComponent,
    ProductDetailsComponent,
    CartItemComponent,

    CartDetailsComponent,
     ShopPageComponent,

 
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SlickCarouselModule,
    AppRoutingModule, 
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    RouterModule.forRoot([]),

  


  ],
  providers: [MockProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
