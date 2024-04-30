import { Controller } from '@nestjs/common';
import { StudentDetailsService } from './student-details.service';

@Controller('student-details')
export class StudentDetailsController {
  constructor(private readonly studentDetailsService: StudentDetailsService) {}

  // @Post()
  // create(@Body() createStudentDetailDto: CreateStudentDetailDto) {
  //   return this.studentDetailsService.create(createStudentDetailDto);
  // }

  // @Get()
  // findAll() {
  //   return this.studentDetailsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.studentDetailsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStudentDetailDto: UpdateStudentDetailDto) {
  //   return this.studentDetailsService.update(+id, updateStudentDetailDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.studentDetailsService.remove(+id);
  // }
}
