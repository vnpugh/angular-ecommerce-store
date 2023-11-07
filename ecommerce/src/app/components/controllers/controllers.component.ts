import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {


  products: Product[] = []; 

  constructor(private productService: MockProductService) {}

  ngOnInit() {
    // Fetch all products from mockproducts
    const allProducts = this.productService.getProducts();

    // Filter to only include controllers
    this.products = allProducts.filter(product => product.category.name === 'controllers');
  }
}
