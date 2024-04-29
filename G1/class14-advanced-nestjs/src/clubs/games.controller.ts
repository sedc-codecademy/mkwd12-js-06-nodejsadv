import { Body, Controller, Post } from '@nestjs/common';
import { SubmitScoreDto } from './dtos/submit-score.dto';
import { GamesService } from './games.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @Post('')
  submitScore(@Body() body: SubmitScoreDto): Promise<any> {
    return this.gameService.submitScore(body);
  }
}
