import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubmitScoreDto } from './dtos/submit-score.dto';
import { GamesService } from './games.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt.guard';

@ApiBearerAuth() // adds the Bearer token authentication to the Swagger UI (for all endpoints in this controller)
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@UseGuards(JwtAuthGuard)
@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}

  @ApiOperation({ summary: 'Submit a score for a game' })
  @ApiCreatedResponse({
    description: 'The score has been successfully submitted.',
  })
  @Post('submit-score')
  submitScore(@Body() body: SubmitScoreDto): Promise<{ message: string }> {
    return this.gameService.submitScore(body);
  }
}
