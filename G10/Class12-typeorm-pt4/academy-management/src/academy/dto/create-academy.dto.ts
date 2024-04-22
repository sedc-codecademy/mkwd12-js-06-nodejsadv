import {
  IsString,
  IsInt,
  Min,
  IsDateString,
  IsNotEmpty,
} from 'class-validator';

export class CreateAcademyDto {
  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  // @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  // @ApiProperty({
  //   description: 'Starting date of the academy',
  //   example: '2024-01-01',
  // })
  @IsNotEmpty()
  @IsDateString()
  readonly startDate: Date;

  // @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  readonly endDate: Date;

  // @ApiProperty()
  @IsInt()
  @Min(0)
  readonly price: number;
}
