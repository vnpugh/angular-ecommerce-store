import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {
  products: Product[] = []; 

  constructor(private productService: MockProductService) {}

  ngOnInit() {
    // Fetch all products from mockproducts
    const allProducts = this.productService.getProducts();

    // Filter to only include video games
    this.products = allProducts.filter(product => product.category.name === 'videogames');
  }
}















// import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product.model';
// import { MockProductService } from 'src/app/services/mock-product.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-videogames',
//   templateUrl: './videogames.component.html',
//   styleUrls: ['./videogames.component.css']
// })
// export class VideogamesComponent implements OnInit {
//   products: Product[] = []; 

//   constructor(private productService: MockProductService, private router: Router) {}

//   navigateToVideoGames() {
//     this.router.navigate(['/videogames']);
//   }

//   ngOnInit() {
//     this.products = this.productService.getProducts();
//   }
// }
