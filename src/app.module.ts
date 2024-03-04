import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from "./categories/categories.module";
import { ReviewsModule } from "./reviews/reviews.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "../ormconfig";

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ProductsModule,
    CategoriesModule,
    ReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
