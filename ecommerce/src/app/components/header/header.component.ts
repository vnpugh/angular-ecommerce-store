import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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

  constructor(
    private productService: MockProductService, 
    private router: Router,
    public cartService: CartService
  ) {}

  viewCart() {
    this.router.navigate(['/cart-details']);
  }

  searchProducts() {
    // Trim the searchQuery and check it's not empty
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery !== '') {
      // Filter the products based on the trimmed search query
      this.products = this.productService.getProducts().filter((product: { name: string; }) =>
        product.name.toLowerCase().includes(trimmedQuery.toLowerCase())
      );

      // Navigate to the search results page with the search query as a parameter
      this.router.navigate(['/search-results'], { queryParams: { q: trimmedQuery } })
        .then(() => {
          // Clear the search input after successful navigation
          this.searchQuery = '';
        })
        .catch((error) => {
          // Handle any navigation errors here
          console.error('Navigation error:', error);
        });
    }
  }
}