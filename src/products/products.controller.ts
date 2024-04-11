import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  Body,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { KeyGuard } from "./guards/products.guard";

import { GetProductsDto } from "./dto/get-product.dto";
import { ConfirmOrderDto } from "./dto/product.dto";

@Controller("products")
@UseGuards(KeyGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query(ValidationPipe) dto: GetProductsDto) {
    return this.productsService.getAllProducts(dto);
  }

  @Get("details/:id")
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

  @Post("confirm-order")
  confirmOrder(@Body() confirmOrderDto: ConfirmOrderDto) {
    return {
      message: "Success",
    };
  }

  @Get("search")
  searchProducts(@Query("q") q: string) {
    return this.productsService.getProductsBySearch(q);
  }
}
