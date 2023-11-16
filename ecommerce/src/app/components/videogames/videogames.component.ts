import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})

export class VideogamesComponent implements OnInit {

  products: Product[] = []; 

  constructor(
    private productService: MockProductService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch all products from mockproducts
    const allProducts = this.productService.getProducts();

    // Filter to only include video games
    this.products = allProducts.filter((product: { category: { name: string; }; }) => product.category.name === 'videogames');
  }

      // Go to the product details page with the product's id
      moreDetailsPage(product: { id: any; }) {
        this.router.navigate(['/product-details', product.id]);
      }





}
















