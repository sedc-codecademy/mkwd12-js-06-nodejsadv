import { PlayerCreateDto } from './player-create.dto';

export class PlayerResponseDto extends PlayerCreateDto {
  // has all properties from PlayerCreateDto

  id: string;
  createdAt: Date;
  updatedAt: Date;
}
