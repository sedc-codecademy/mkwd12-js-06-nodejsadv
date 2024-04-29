import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class SubmitScoreDto {
  @IsUUID()
  @IsNotEmpty()
  homeTeamId: string;

  @IsUUID()
  @IsNotEmpty()
  awayTeamId: string;

  @IsArray()
  @IsUUID(4, { each: true })
  homeTeamScorersIds: string[];

  @IsArray()
  @IsUUID(4, { each: true })
  awayTeamScorersIds: string[];
}
