import { Controller, Get, Param } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  @Get()
  getAll() {
    return [{ text: 'ALLPROFILES' }];
  }
  @Get(':handle')
  getByHandle(@Param(':handle') handle: string) {
    return [{ text: handle }];
  }
}
