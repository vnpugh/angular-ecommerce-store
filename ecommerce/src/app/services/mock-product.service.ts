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
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-1.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.30.23',
      isNewRelease: false, 
      isPreOrder: true
    },
    {
      id: 1.1,
      name: 'Just Dance 2024 Edition',
      price: 89.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-7.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.10.23',
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.2,
      name: 'Metal Gear Solid Master Vol 1',
      price: 59.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-6.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.14.23',
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.3,
      name: 'Hotwheels Unleased 2',
      price: 49.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-10.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.15.23',
      isNewRelease: true, 
      isPreOrder: false
    },

    {
      id: 1.4,
      name: 'Super Mario Bros. Wonder',
      price: 59.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-8.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.10.23',
      isNewRelease: true, 
      isPreOrder: false
    },

    {
      id: 1.5,
      name: 'Borderlands 3 Ultimate Edition',
      price: 59.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-9.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '11.12.23',
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 1.6,
      name: 'Avatar: Frontiers of Pandora',
      price: 69.99,
      salePrice: 60.99,
      description: 'This is a sample product.',
      image: 'assets/mock-img-4.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '09.10.23',
      isNewRelease: false, 
      isPreOrder: false
    },
    {
      id: 1.7,
      name: 'Final Fantasy VII: Rebirth',
      price: 69.99,
      salePrice: 0.00,
      description: 'This is a sample product.',
      image: 'assets/mock-img-5.png',
      category: {
          id: 1, name: 'videogames',
          description: '',
          image: ''
      },
      releaseDate: '09.10.23',
      isNewRelease: false, 
      isPreOrder: false
    },


  // Consoles

    {
      id: 2,
      name: 'Sony PlayStation 5 Console - Standard Edition',
      price: 444.99,
      salePrice: 0.00,
      description: 'Another sample product.',
      image: 'assets/mock-img-11.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      releaseDate: '08.10.23',
      isNewRelease: false, 
      isPreOrder: false
    },
    {
      id: 2.1,
      name: 'Microsoft Xbox Series X Console - New Condition',
      price: 499.99,
      salePrice: 0.00,
      description: 'Another sample product.',
      image: 'assets/mock-img-17.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      releaseDate: '11.15.23',
      isNewRelease: true, 
      isPreOrder: false
    },
    {
      id: 2.2,
      name: 'Sony PlayStation 4 1TB Console Call of Duty: Black Ops III',
      price: 499.99,
      salePrice: 0.00,
      description: 'Another sample product.',
      image: 'assets/mock-img-14.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      releaseDate: '12.18.23',
      isNewRelease: false, 
      isPreOrder: true
    },
    {
      id: 2.3,
      name: 'Microsoft Xbox One Console 1TB Halo 5 Limited Edition',
      price: 250.99,
      salePrice: 0.00,
      description: 'Another sample product.',
      image: 'assets/mock-img-19.png',
      category: {
          id: 2, name: 'gameconsoles',
          description: '',
          image: ''
      },
      releaseDate: '07.10.23',
      isNewRelease: false, 
      isPreOrder: false
    },













          // Controllers
    {
        id: 3,
        name: 'Sony DualSense Wireless Controller for PlayStation 5',
        price: 47.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-16.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },
      {
        id: 3.1,
        name: 'Sony Wireless Controller - Volcanic Red',
        price: 97.99,
        salePrice: 50.99,
        description: 'Another sample product.',
        image: 'assets/mock-img-22.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },

      {
        id: 3.2,
        name: 'Afterglow Wireless Deluxe Controller for Nintendo Switch',
        price: 57.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-26.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },

      {
        id: 3.3,
        name: 'Microsoft Xbox Elite Wireless Controller Series 2',
        price: 37.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-21.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },
      {
        id: 3.4,
        name: 'PowerA Pink Enhanced Wired Controller',
        price: 37.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-12.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },
      {
        id: 3.5,
        name: 'Retro Nintendo GameCube Controller',
        price: 29.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-24.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },
      {
        id: 3.6,
        name: 'Retro Nintendo Switch Joy-Con (L) NES Controller',
        price: 44.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-25.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
        isNewRelease: false, 
        isPreOrder: false
      },
      {
        id: 3.7,
        name: 'Microsoft Xbox Series X Controller Velocity Green',
        price: 38.99,
        salePrice: 0.00,
        description: 'Another sample product.',
        image: 'assets/mock-img-27.png',
        category: {
            id: 2, name: 'controllers',
            description: '',
            image: ''
        },
        releaseDate: '05.19.23',
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
