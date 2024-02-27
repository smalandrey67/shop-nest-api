import { Injectable } from "@nestjs/common";
import { ALL_PRODUCTS_MOCK } from "./products.data";

@Injectable()
export class ProductsService {
  getAllProducts() {
    return ALL_PRODUCTS_MOCK;
  }

  getProductById(id: number) {
    return ALL_PRODUCTS_MOCK.find((product) => product.id === id);
  }

  getProductsByCategory(category: string) {
    return ALL_PRODUCTS_MOCK.filter(
      (product) =>
        product.category.name.toLowerCase() === category.toLowerCase(),
    );
  }
}
