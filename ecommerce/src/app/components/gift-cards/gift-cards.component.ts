// gift-cards.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product.model';
// import { CartService } from 'src/app/services/cart.service';
// import { MockProductService } from 'src/app/services/mock-product.service';


// @Component({
//   selector: 'app-gift-cards',
//   templateUrl: './gift-cards.component.html',
//   styleUrls: ['./gift-cards.component.css']
// })
// export class GiftCardsComponent implements OnInit {
//   products: Product[] = []; 
//   productService: any;

//   constructor(private mockProductService: MockProductService, 
//              private cartService: CartService) {}



//   ngOnInit() {
//     // Fetch all products from mockproducts
//     const allProducts = this.productService.getProducts();

//     // Filter to only include video games
//     this.products = allProducts.filter((product: { category: { name: string; }; }) => product.category.name === 'giftcards');
//   }


//   addToCart(product: Product) { // Use your actual product model
//     this.cartService.addToCart(product, 1); // Implement this method in your cart service
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.css']
})
export class GiftCardsComponent implements OnInit {
addToCart(_t6: Product) {
throw new Error('Method not implemented.');
}
  products: Product[] = []; 

  // Inject the MockProductService. No need to declare productService: any;
  constructor(private mockProductService: MockProductService, 
             private cartService: CartService) {}

             ngOnInit() {
              // No need to subscribe if getProducts returns an array directly
              const allProducts = this.mockProductService.getProducts();
              
              // Filter to only include products from the 'giftcards' category
              this.products = allProducts.filter(product => product.category.name === 'giftcards');
            }
          
      
          }


