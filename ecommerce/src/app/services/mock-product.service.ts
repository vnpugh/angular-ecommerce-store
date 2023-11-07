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
      isNewRelease: false, 
      isPreOrder: true
    },
    {
      id: 1.1,
      name: 'Just Dance 2024 Edition',
      price: 89.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-7.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.2,
      name: 'Metal Gear Solid Master Collection Vol 1',
      price: 59.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-6.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.3,
      name: 'Hotwheels Unleased 2',
      price: 49.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-10.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },

    {
      id: 1.4,
      name: 'Super Mario Bros. Wonder - Nintendo Switch',
      price: 59.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-8.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },

    {
      id: 1.5,
      name: 'Borderlands 3 Ultimate Edition - Nintendo Switch',
      price: 59.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-9.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.6,
      name: 'Avatar: Frontiers of Pandora',
      price: 69.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-4.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: false, 
      isPreOrder: false
    },
    {
      id: 1.7,
      name: 'Final Fantasy VII: Rebirth - PlayStation 5',
      price: 69.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-5.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      isNewRelease: false, 
      isPreOrder: false
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
      isNewRelease: false, 
      isPreOrder: false
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
        isNewRelease: false, 
        isPreOrder: false
      },


  ];

  getProducts(): Product[] {
    return this.mockProducts;
  }
}
