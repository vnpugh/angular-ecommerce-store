import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-game-consoles',
  templateUrl: './game-consoles.component.html',
  styleUrls: ['./game-consoles.component.css']
})
export class GameConsolesComponent implements OnInit {

  products: Product[] = []; 

  // multiple services in a single constructor
  constructor(
    private productService: MockProductService, 
    private router: Router
  ) {}

      // Fetch all products from mockproducts
  ngOnInit() {
    const allProducts = this.productService.getProducts();

    // Filter to only include consoles
    this.products = allProducts.filter((product: { category: { name: string; }; }) => product.category.name === 'gameconsoles');
  }

    // Go to the product details page with the product's id
  moreDetailsPage(product: { id: any; }) {
    this.router.navigate(['/product-details', product.id]);
  }
}
