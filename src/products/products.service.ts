import { Injectable } from "@nestjs/common";
import { ALL_PRODUCTS_MOCK } from "./products.data";

@Injectable()
export class ProductsService {
  getAllProducts(dto) {
    let products = ALL_PRODUCTS_MOCK;

    if (!Object.values(dto)) return products;

    if (dto.category) {
      products = products.filter(
        (product) =>
          product.category.name.toLowerCase() === dto.category.toLowerCase(),
      );
    }

    if (dto.q) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(dto.q.toLowerCase()),
      );
    }

    if (dto.sort === "asc") {
      products = products.slice().sort((a, b) => a.price - b.price);
    } else if (dto.sort === "desc") {
      products = products.slice().sort((a, b) => b.price - a.price);
    }

    return products;
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

  getProductsBySearch(query: string) {
    console.log(query);

    if (!query) {
      return ALL_PRODUCTS_MOCK;
    }

    return ALL_PRODUCTS_MOCK.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
