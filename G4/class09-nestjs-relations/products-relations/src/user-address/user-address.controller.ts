import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Controller('user-address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}

  //We are not using this here in this controlller because we will create address on user creation
  // @Post()
  // create(@Body() createUserAddressDto: CreateUserAddressDto) {
  //   return this.userAddressService.create(createUserAddressDto);
  // }

  @Get()
  findAll() {
    return this.userAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAddressService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserAddressDto: UpdateUserAddressDto,
  ) {
    return this.userAddressService.update(Number(id), updateUserAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAddressService.remove(Number(id));
  }
}
