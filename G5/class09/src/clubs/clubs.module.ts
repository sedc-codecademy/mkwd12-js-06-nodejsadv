import { Module } from '@nestjs/common';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './club.entity';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}