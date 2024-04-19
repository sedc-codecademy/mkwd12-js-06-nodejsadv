import { Module } from '@nestjs/common';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Club])], // we tell typeorm to use entity CLub in this feature
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
