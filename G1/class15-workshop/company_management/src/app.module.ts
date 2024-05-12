import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { DepartmentModule } from './department/department.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, EmployeeModule, DepartmentModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
