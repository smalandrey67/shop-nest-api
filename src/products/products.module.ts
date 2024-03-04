import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { KeyGuard } from "./guards/products.guard";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
