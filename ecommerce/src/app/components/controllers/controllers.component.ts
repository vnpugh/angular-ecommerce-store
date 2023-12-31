import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})

export class ControllersComponent implements OnInit {

  products: Product[] = []; 

  constructor(
    private productService: MockProductService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch all products from mockproducts
    const allProducts = this.productService.getProducts();

    // Filter to only include controllers
    this.products = allProducts.filter((product: { category: { name: string; }; }) => product.category.name === 'controllers');
  }


  moreDetailsPage(product: { id: any; }) {
    this.router.navigate(['/product-details', product.id]);
  }







}
