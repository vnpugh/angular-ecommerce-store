import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { HomepageComponent } from '../homepage/homepage.component';


const routes: Routes = [
    {path: "product/:id", component: ProductComponent},
    {path: "**", component: HomepageComponent},
  ];


  @NgModule({ 
    imports: [BrowserModule,
              RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule],
  })
  export class RoutingModule {}