import { IsString, IsInt, Min, IsDateString } from 'class-validator';

export class CreateAcademyDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsDateString()
  readonly startDate: Date;

  @IsDateString()
  readonly endDate: Date;

  @IsInt()
  @Min(0)
  readonly price: number;
}
