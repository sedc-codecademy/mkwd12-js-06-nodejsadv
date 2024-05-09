import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsUUID } from 'class-validator';

export class SubmitScoreDto {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'ID of the home team',
    example: 'f7b1b2b4-4c7b-4b7b-8b7b-7b7b7b7b7b7b',
  })
  homeTeamId: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'ID of the home team',
    example: 'f7b1b2b4-4c7b-4b7b-8b7b-7b7b7b7b7b7b',
  })
  awayTeamId: string;

  @IsArray()
  @IsUUID(4, { each: true })
  @ApiProperty({
    type: [String],
    description: 'IDs of players scoring for the home team',
    example: [
      'f7b1b2b4-4c7b-4b7b-8b7b-7b7b7b7b7b7c',
      'f7b1b2b4-4c7b-4b7b-8b7b-2b7b7b7b7b7b',
    ],
  })
  homeTeamScorersIds: string[];

  @IsArray()
  @IsUUID(4, { each: true })
  @ApiProperty({
    type: [String],
    description: 'IDs of players scoring for the away team',
    example: [
      'f7b1b2b4-4c7b-4b7b-8b7b-7b7b7b7b7b7b',
      'f7b1b2b4-4c7b-4b7b-8b7b-2b7b7b7b7b7b',
    ],
  })
  awayTeamScorersIds: string[];
}
