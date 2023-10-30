import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';


import { ProductComponent } from './product/product.component';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    ProductsDisplayComponent,
    ProductPageComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
        HttpClientModule,
        RouterModule.forRoot([ { path: '', component: HomepageComponent }]),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
