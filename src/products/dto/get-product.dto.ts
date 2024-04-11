import { IsOptional, IsIn, IsNotEmpty, IsString } from "class-validator";

export class GetProductsDto {
  @IsOptional()
  @IsIn(["asc", "desc"])
  sort: "asc" | "desc";

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  q: string;
}
