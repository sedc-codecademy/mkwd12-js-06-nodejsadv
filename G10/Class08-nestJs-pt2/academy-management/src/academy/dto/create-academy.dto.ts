import { IsDate, IsInt, IsString, Min } from 'class-validator';

export class CreateAcademyDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  readonly endDate: Date;

  @IsInt()
  @Min(0)
  readonly price: number;
}
