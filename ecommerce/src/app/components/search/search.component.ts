import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
moreDetailsPage(_t10: any) {
throw new Error('Method not implemented.');
}
  searchQuery: string = '';
  
  filteredProducts: any[] = [];

  constructor(private productService: MockProductService, private route: ActivatedRoute) {}

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
}
