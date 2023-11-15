import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})

export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  maxQuantity: number[] = [...Array(10).keys()].map(x => x + 1); 
  subtotal!: number; 
  totalItems!: number;
  shipping!: number;
  tax!: number;
  total!: number;


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartDetails();
  }

  loadCartDetails(): void {
    this.cartItems = this.cartService.getCartItems();
    this.totalItems = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    this.shipping = this.subtotal > 79 ? 0 : 5.99;
    this.tax = this.calculateTax(this.subtotal);
    this.total = this.subtotal + this.shipping + this.tax;
  }

  calculateTax(subtotal: number): number {
    const taxRate = 0.08;
    return subtotal * taxRate;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.cartService.updateCartItems(this.cartItems);
    this.refreshCartTotals();
  }

  private refreshCartTotals(): void {
    // Since we are using BehaviorSubjects in the service, we need to subscribe to get the new values
    // Make sure to unsubscribe to avoid memory leaks, or use the async pipe in your template
    this.cartService.subtotal$.subscribe(newSubtotal => this.subtotal = newSubtotal);
    this.cartService.tax$.subscribe(newTax => this.tax = newTax);
    this.cartService.shipping$.subscribe(newShipping => this.shipping = newShipping);
    this.cartService.total$.subscribe(newTotal => this.total = newTotal);
    this.totalItems = this.cartItems.length; // Assuming each item is counted once regardless of quantity
  }
}

