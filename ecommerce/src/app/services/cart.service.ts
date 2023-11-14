import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

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
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Add other necessary methods for cart functionality (remove item, clear cart, etc.)
}
