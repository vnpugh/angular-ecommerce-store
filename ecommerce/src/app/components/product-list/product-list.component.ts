// injecting the mock-product service into this component 

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-product-list', 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: MockProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
