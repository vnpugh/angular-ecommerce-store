import { Component } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { MockProductService } from 'src/app/services/mock-product.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  searchQuery: string = '';
  products: any[] = [];
  filteredProducts: any;

  constructor(private productService: MockProductService, private router: Router) {} // Inject the Router service

  searchProducts() {
    if (this.searchQuery.trim() !== '') {
      this.products = this.productService.getProducts().filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });

      this.searchQuery = ''; // Clear the search input
      this.router.navigate(['/search-results'], { queryParams: { q: this.searchQuery } });
    }
  }
}

  
 









  // isShopDropdownOpen: boolean = false;

  // toggleShopDropdown() {
  //   this.isShopDropdownOpen = !this.isShopDropdownOpen;
 


    // }
