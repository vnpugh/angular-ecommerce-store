import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockProductService } from 'src/app/services/mock-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  preOrderProducts: any[] = []; //True

  constructor(private router: Router,
              private mockProductService: MockProductService) {}

      ngOnInit(): void {
                this.loadPreOrderProducts();
              }

        loadPreOrderProducts(): void {
      
                const allProducts = this.mockProductService.getProducts();
 
                this.preOrderProducts = allProducts.filter(product => product.isPreOrder);
              }


  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
