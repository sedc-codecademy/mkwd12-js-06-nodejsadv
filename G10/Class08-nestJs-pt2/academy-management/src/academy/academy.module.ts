import { Module } from '@nestjs/common';
import { AcademyController } from './academy.controller';
import { AcademyService } from './academy.service';

@Module({
  controllers: [AcademyController],
  providers: [AcademyService]
})
export class AcademyModule {}
