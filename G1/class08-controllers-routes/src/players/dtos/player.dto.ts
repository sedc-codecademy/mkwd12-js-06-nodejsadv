// id
// name
// age
// position
// country
// goals
// assists
// saves
// matchesPlayed
// createdAt
// updatedAt

export class PlayerCreateDto {
  name: string;
  age: number;
  position: string;
  country: string;
  goals: number;
  assists: number;
  saves: number;
  matchesPlayed: number;
}

export class PlayerUpdateDto extends PlayerCreateDto {
  // implements all properties from PlayerCreateDto
}

export class PlayerResponseDto extends PlayerCreateDto {
  // has all properties from PlayerCreateDto

  id: string;
  createdAt: Date;
  updatedAt: Date;
}
