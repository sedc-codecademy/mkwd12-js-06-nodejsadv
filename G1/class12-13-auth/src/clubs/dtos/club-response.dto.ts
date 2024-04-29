import { ClubCreateDto } from './club-create.dto';

export class ClubResponseDto extends ClubCreateDto {
  // all properties from ClubCreatedDto are available here

  id: string;
  createdAt: Date;
  updatedAt: Date;
}
