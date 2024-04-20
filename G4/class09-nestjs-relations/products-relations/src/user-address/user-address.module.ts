import { Module } from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { UserAddressController } from './user-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAddress])],
  controllers: [UserAddressController],
  providers: [UserAddressService],
  //By exporting a member of a module we can use it in other modules by importing
  exports: [UserAddressService],
})
export class UserAddressModule {}
