import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { log } from "console";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(":id")
  getProductById(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }

  @Get("category/:category")
  getProductsByCategory(@Param("category") category: string) {
    return this.productsService.getProductsByCategory(category);
  }
}
