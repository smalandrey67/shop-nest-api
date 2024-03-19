import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  Body,
  Query,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { KeyGuard } from "./guards/products.guard";

import { ConfirmOrderDto } from "./dto/product.dto";

@Controller("products")
@UseGuards(KeyGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query("sort") sort: "asc" | "desc") {
    return this.productsService.getAllProducts(sort);
  }

  @Get(":id")
  getProductById(@Param("id", ParseIntPipe) id: number) {
    return this.productsService.getProductById(id);
  }

  @Get("category/:category")
  getProductsByCategory(
    @Param("category") category: string,
    @Query("sort") sort: "asc" | "desc",
  ) {
    return this.productsService.getProductsByCategory(category, sort);
  }

  @Post("/confirm-order")
  confirmOrder(@Body() confirmOrderDto: ConfirmOrderDto) {
    return {
      message: "Success",
    };
  }
}
