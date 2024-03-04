import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class KeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const { authorization }: { authorization: string } = request.headers;

    console.log(authorization);

    if (!authorization || authorization !== "123") {
      throw new UnauthorizedException("Please provide token");
    }

    return true;
  }
}
