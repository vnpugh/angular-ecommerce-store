import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service'; 
import { CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  // Add methods to handle other cart actions, like removing items, etc.
}
