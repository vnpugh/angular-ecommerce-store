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

  private subtotal = new BehaviorSubject<number>(0);
  private tax = new BehaviorSubject<number>(0);
  private shipping = new BehaviorSubject<number>(0);
  private total = new BehaviorSubject<number>(0);

    // public observables to expose to components
    subtotal$ = this.subtotal.asObservable();
    tax$ = this.tax.asObservable();
    shipping$ = this.shipping.asObservable();
    total$ = this.total.asObservable();
 
    // Observable for the item count
    cartItemCount$ = this.cartItemCount.asObservable();

  addToCart(product: Product, quantity: number): void {
    const existingCartItem = this.cartItems.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      this.cartItems.push({
        id: this.cartItems.length + 1, 
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
 

recalculateTotals(): void {
  const newSubtotal = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  this.subtotal.next(newSubtotal);

  // Assuming shipping is free over a certain subtotal, otherwise a flat rate
  const newShipping = newSubtotal > 79 ? 0 : 5.99;
  this.shipping.next(newShipping);
  
  // Assuming tax is a fixed percentage of the subtotal
  const taxRate = 0.08; 
  const newTax = newSubtotal * taxRate;
  this.tax.next(newTax);
  
  const newTotal = newSubtotal + newShipping + newTax;
  this.total.next(newTotal);
}



updateCartItems(cartItems: CartItem[]) {
  this.cartItems = cartItems;
  this.recalculateTotals();
  // Update the item count observable value
  const totalCount = this.cartItems.reduce((sum, current) => sum + current.quantity, 0);
  this.cartItemCount.next(totalCount); // This should update the cart icon count
}



}
