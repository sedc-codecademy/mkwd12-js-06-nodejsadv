import {
  IsArray,
  IsDateString,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  @Length(3, 30)
  title: string;

  @IsNumber()
  @Min(5)
  numberOfClasses: number;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsNumber({}, { each: true })
  students: number[];
}
