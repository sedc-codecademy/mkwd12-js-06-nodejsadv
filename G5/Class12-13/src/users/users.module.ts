import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserORMEntity } from './entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserORMEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // Will allow to use the UsersService in another modules
})
export class UsersModule {}
