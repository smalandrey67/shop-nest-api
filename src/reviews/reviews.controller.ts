import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { KeyGuard } from "src/products/guards/products.guard";

@Controller("reviews")
@UseGuards(KeyGuard)
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get(":reviewId")
  getReviewsById(@Param("reviewId", ParseIntPipe) reviewId: number) {
    return this.reviewsService.getReviewsById(reviewId);
  }
}
