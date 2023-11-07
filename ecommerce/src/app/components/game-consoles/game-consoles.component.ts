import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-game-consoles',
  templateUrl: './game-consoles.component.html',
  styleUrls: ['./game-consoles.component.css']
})
export class GameConsolesComponent implements OnInit {

  products: Product[] = []; 

  constructor(private productService: MockProductService) {}

  ngOnInit() {
    // Fetch all products from mockproducts
    const allProducts = this.productService.getProducts();

    // Filter to only include consoles
    this.products = allProducts.filter(product => product.category.name === 'consoles');
  }








}
