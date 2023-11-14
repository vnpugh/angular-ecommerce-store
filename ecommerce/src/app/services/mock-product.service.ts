import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class MockProductService {

  private mockProducts: Product[] = [

    // Games
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
      name: 'Metal Gear Solid Master Vol 1',
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
      name: 'Super Mario Bros. Wonder',
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
      name: 'Borderlands 3 Ultimate Edition',
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
      name: 'Final Fantasy VII: Rebirth',
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


  // Consoles

    {
      id: 2,
      name: 'Sony PlayStation 5 Console - Standard Edition',
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
      id: 2.1,
      name: 'Microsoft Xbox Series X Console - New Condition',
      price: 499.99,
      description: 'Another sample product.',
      image: 'assets/mock-img-17.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 2.2,
      name: 'Sony PlayStation 4 1TB Console Call of Duty: Black Ops III',
      price: 499.99,
      description: 'Another sample product.',
      image: 'assets/mock-img-14.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      isNewRelease: false, 
      isPreOrder: true
    },
    {
      id: 2.3,
      name: 'Microsoft Xbox One Console 1TB Halo 5 Limited Edition',
      price: 250.99,
      description: 'Another sample product.',
      image: 'assets/mock-img-19.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      isNewRelease: false, 
      isPreOrder: false
    },





























          // Controllers
    {
        id: 3,
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
  product: any;
  products: any;


  constructor() {}

  //Methods

  getProductById(id: number): Product | undefined {
  
    return this.mockProducts.find((product: { id: number; }) => product.id === id);
  }

  getProducts(): Product[] {
    return this.mockProducts;
  }
}
