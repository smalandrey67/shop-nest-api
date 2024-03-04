import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { KeyGuard } from "./guards/products.guard";

@Controller("products")
@UseGuards(KeyGuard)
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
