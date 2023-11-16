import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockProductService } from 'src/app/services/mock-product.service';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  quantity: number = 1;
  message: string = '';
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private mockProductService: MockProductService,
    private cartService: CartService
    
    ) {}

    viewCart() {
      this.router.navigate(['/cart-details']);
    }

  ngOnInit() {
    // Get the 'id' parameter
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {


      this.product = this.mockProductService.getProductById(+productId);
      if (!this.product) {
        console.error('Product not found');
 
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
