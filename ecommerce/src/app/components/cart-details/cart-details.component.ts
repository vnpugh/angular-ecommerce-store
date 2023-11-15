import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  subtotal!: number; // Assuming subtotal is a number
  totalItems!: number;
  shipping!: number; // Assuming shipping is a number, unless it's a flat rate like "FREE"
  tax!: number;
  total!: number;
  cartItems!: CartItem[]; // Define cartItems as an array of CartItem

  constructor(private cartService: CartService) {} // Inject your CartService

  ngOnInit(): void {
    this.loadCartDetails();
  }

  loadCartDetails(): void {
    // Here, you would load the cart items and calculate totals using CartService
    // This is just an example and would depend on the logic within your CartService
    this.cartItems = this.cartService.getCartItems();
    this.totalItems = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    
    // Assume shipping is free if subtotal is over a certain amount, otherwise it's a flat rate
    this.shipping = this.subtotal > 79 ? 0 : 5.99;
    
    // Calculate tax as a percentage of the subtotal
    this.tax = this.calculateTax(this.subtotal);
    
    // Calculate total
    this.total = this.subtotal + this.shipping + this.tax;
  }

  calculateTax(subtotal: number): number {
    // Assuming a fixed tax rate of 7% for the example
    const taxRate = 0.07;
    return subtotal * taxRate;
  }

  // ... any additional methods for cart functionality
}

