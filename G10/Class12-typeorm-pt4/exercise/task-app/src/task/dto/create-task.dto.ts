import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Priority } from 'src/util/priority.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsEnum(Priority)
  readonly priority: Priority;

  @IsNotEmpty()
  @IsBoolean()
  readonly completed: boolean;
}
