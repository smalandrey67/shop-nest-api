import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from "./categories/categories.module";
import { ReviewsModule } from "./reviews/reviews.module";

@Module({
  imports: [ProductsModule, CategoriesModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
