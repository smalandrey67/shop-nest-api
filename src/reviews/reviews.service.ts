import { Injectable } from "@nestjs/common";
import { ALL_REVIEWS_MOCK } from "./reviews.data";

@Injectable()
export class ReviewsService {
  getReviewsById(reviewId: number) {
    return ALL_REVIEWS_MOCK.find((review) => review.id === reviewId);
  }
}
