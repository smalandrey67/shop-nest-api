import { Injectable } from "@nestjs/common";
import { ALL_PRODUCTS_MOCK } from "./products.data";

@Injectable()
export class ProductsService {
  getAllProducts(sort: "asc" | "desc") {
    if (sort === "asc") {
      return ALL_PRODUCTS_MOCK.slice().sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      return ALL_PRODUCTS_MOCK.slice().sort((a, b) => b.price - a.price);
    }

    if (sort === "all") {
      return ALL_PRODUCTS_MOCK;
    }

    return ALL_PRODUCTS_MOCK;
  }

  getProductById(id: number) {
    return ALL_PRODUCTS_MOCK.find((product) => product.id === id);
  }

  getProductsByCategory(category: string, sort: "asc" | "desc") {
    const productsByCategory = ALL_PRODUCTS_MOCK.filter(
      (product) =>
        product.category.name.toLowerCase() === category.toLowerCase(),
    );

    if (sort === "asc") {
      return productsByCategory.slice().sort((a, b) => a.price - b.price);
    }

    if (sort === "desc") {
      return productsByCategory.slice().sort((a, b) => b.price - a.price);
    }

    if (sort === "all") {
      return productsByCategory;
    }

    return productsByCategory;
  }
}
