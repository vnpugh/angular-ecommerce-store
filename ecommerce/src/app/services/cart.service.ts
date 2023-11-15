import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
 
    // Observable for the item count
    cartItemCount$ = this.cartItemCount.asObservable();



  addToCart(product: Product, quantity: number): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cartItems.push({
        id: this.cartItems.length + 1, // Or a better id generation strategy
        quantity,
        product
      });
    }

   // Update the item count observable value
   const totalCount = this.cartItems.reduce((sum, current) => sum + current.quantity, 0);
   this.cartItemCount.next(totalCount);
 }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
 
        // ... potentially other methods related to cart operations 

}
