import { Injectable } from '@angular/core';
import { Product } from '../products/models/productModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private products: Product[] = [
    new Product(
      'Nikon Camera',
      '../../../assets/product-1.jpg',
      2000,
      true,
      true
    ),
    new Product(
      'Blue T-Shirt',
      '../../../assets/product-2.jpg',
      250,
      true,
      true
    ),
    new Product('White Lamp', '../../../assets/product-3.jpg', 500, true, true),
    new Product(
      'Black Nike',
      '../../../assets/product-4.jpg',
      300,
      false,
      true
    ),
    new Product('Drone', '../../../assets/product-5.jpg', 3000, false, true),
    new Product(
      'Huawei Watch',
      '../../../assets/product-6.jpg',
      950,
      false,
      false
    ),
    new Product(
      'Black Blouse',
      '../../../assets/product-7.jpg',
      80,
      true,
      false
    ),
    new Product(
      'Some Creams',
      '../../../assets/product-8.jpg',
      60,
      false,
      false
    ),
  ];

  getAllProducts() {
    return this.products;
  }
}
