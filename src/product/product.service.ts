import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'mobile',
      price: 2000,
    },
    {
      id: 2,
      name: 'tablet',
      price: 15000,
    },
    {
      id: 3,
      name: 'laptop',
      price: 45000,
    },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
