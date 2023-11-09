
import { Component } from '@angular/core';
import { MockProductService } from 'src/app/services/mock-product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchQuery: string = '';
  products: any[] = [];

  constructor(private productService: MockProductService) {}

  searchProducts() {
    if (this.searchQuery.trim() !== '') { // Checking if there is non-empty text
      this.products = this.productService.getProducts().filter(product => {
  
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());


    });
  }
}

  

  // isShopDropdownOpen: boolean = false;

  // toggleShopDropdown() {
  //   this.isShopDropdownOpen = !this.isShopDropdownOpen;
 


    }
