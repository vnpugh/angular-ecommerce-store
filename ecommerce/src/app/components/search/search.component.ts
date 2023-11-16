import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  filteredProducts: any[] = [];

  searchQuery: string = '';

  constructor(private productService: MockProductService, 
    private route: ActivatedRoute,
    private router:Router) {}


  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'].toLowerCase().trim(); 

      if (this.searchQuery.length > 0) {
      
        this.filteredProducts = this.productService.getProducts().filter((product: { name: string; }) => {
          return product.name.toLowerCase().includes(this.searchQuery);
        });
      } else {

        this.filteredProducts = [];
      }
    });

  }

  moreDetailsPage(product: { id: any; }): void {
    this.router.navigate(['/search-results', product.id]);
  }
  
}
