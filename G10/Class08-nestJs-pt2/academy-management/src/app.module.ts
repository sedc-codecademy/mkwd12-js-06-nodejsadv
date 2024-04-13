import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademyModule } from './academy/academy.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { TrainerModule } from './trainer/trainer.module';

@Module({
  imports: [AcademyModule, SubjectModule, StudentModule, TrainerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
