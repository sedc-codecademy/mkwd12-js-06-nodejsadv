import { Module } from '@nestjs/common';
import { AcademyService } from './academy.service';
import { AcademyController } from './academy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Academy } from './entities/academy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Academy])],
  controllers: [AcademyController],
  providers: [AcademyService],
})
export class AcademyModule {}
