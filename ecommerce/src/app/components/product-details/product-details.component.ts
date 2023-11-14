import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockProductService } from 'src/app/services/mock-product.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
message: any;
  
  constructor(
    private route: ActivatedRoute, 
    private mockProductService: MockProductService,
    private cartService: CartService
    
    ) {}

  ngOnInit() {
    // Get the 'id' parameter
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Use the injected productService to fetch the product
      this.product = this.mockProductService.getProductById(+productId);

      // If no product is returned, log an error or handle as appropriate
      if (!this.product) {
        console.error('Product not found');
        // Handle the error, e.g., redirect to a 'product not found' page or display a message
      }
    }
  }

  addToCart(product: Product, quantity: number) {
    if (product && quantity > 0) {

      this.cartService.addToCart(product, quantity);
      this.message = `${product.name} added to cart: Quantity ${quantity}`;

    }
  }
}
