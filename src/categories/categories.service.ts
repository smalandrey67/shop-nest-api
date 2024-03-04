import { Injectable, UseGuards } from "@nestjs/common";
import { ALL_CATEGORIES_MOCK } from "./categories.data";

@Injectable()
export class CategoriesService {
  getAllCategories() {
    return ALL_CATEGORIES_MOCK;
  }
}
