import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})

export class ProductComponent implements OnInit {

  products = PRODUCTS;

  ngOnInit(): void {
    // Implement your initialization code here.
    // This method will be executed when the component is initialized.
  }
}
