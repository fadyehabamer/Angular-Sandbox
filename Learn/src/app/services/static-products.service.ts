import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  products : Iproduct[]; 

  constructor() { 
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        description: 'This is product 1',
        price: 100,
        quantity: 10,
        imageUrl: 'assets/images/products/image1.jpg',
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'This is product 2',
        price: 200,
        quantity: 20,
        imageUrl: 'assets/images/products/image2.jpg',
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'This is product 3',
        price: 300,
        quantity: 30,
        imageUrl: 'assets/images/products/image3.jpg',
        categoryId: 2,
      },
      {
        id: 4,
        name: 'Product 4',
        description: 'This is product 4',
        price: 400,
        quantity: 40,
        imageUrl: 'assets/images/products/image4.jpg',
        categoryId: 2,
      },
      {
        id: 5,
        name: 'Product 5',
        description: 'This is product 5',
        price: 500,
        quantity: 50,
        imageUrl: 'assets/images/products/image5.jpg',
        categoryId: 3,
      },
    ];
  }


  getAllProducts(): Iproduct[] {
    return this.products;
  }

  // getProductById(id: number): Iproduct != undefined {
  //   // that because the find method return undefined if the id not found
  //   // return this.products.find(p => p.id === id);

  //   if (id) {
  //     return this.products.find(p => p.id === id);
  //   }
  // }

  getProductById(id: number): Iproduct {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }


  getProductByCategory(categoryId: number): Iproduct[] {
    if (categoryId === 0) {
      return this.products;
    }
    return this.products.filter(p => p.categoryId === categoryId);
  }

  addProduct(product: Iproduct): void {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    this.products.splice(index, 1);
  }





  


}
