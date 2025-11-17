import {
  Controller,
  Post as PostHttp,
  Body,
  Get,
  Param,
  Query,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("api/users")
export class UsersController {
  constructor(private svc: UsersService) {}

  @PostHttp()
  create(
    @Body("name") name: string,
    @Body("email") email: string,
    @Body("password") password: string
  ) {
    const dto = {
      name,
      email,
      password,
    };

    return this.svc.create(dto);
  }

  @Get()
  findAll() {
    return this.svc.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.svc.findOne(id);
  }

  @Get("by-email")
  findByEmail(@Query("email") email: string) {
    return this.svc.findByEmail(email);
  }
}
