import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Call of Duty',
      price: 89.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-1.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
    },
    {
      id: 2,
      name: 'Sony PlayStation 5 Console',
      price: 444.99,
      description: 'Another sample product.',
      image: 'assets/mock-img-11.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
    },
    {
        id: 2,
        name: 'PowerA Pink Enhanced Wired Controller',
        price: 37.99,
        description: 'Another sample product.',
        image: 'assets/mock-img-12.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
      },


  ];

  getProducts(): Product[] {
    return this.mockProducts;
  }
}
