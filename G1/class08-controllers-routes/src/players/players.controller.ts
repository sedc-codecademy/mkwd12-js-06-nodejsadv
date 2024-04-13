import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerResponseDto } from './dtos/player-response.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';

// whitelist: If set to true, strips validated objects of any properties that do not use any validation decorators.
// forbidNonWhitelisted: If true, instead of stripping non-whitelisted properties, throws an error.
// transform: If true, transforms the object to the class instance it expects (e.g., the DTO class).

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
// test
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  getPlayers(): PlayerResponseDto[] {
    return this.playersService.getPlayers();
  }

  @Post('/')
  createPlayer(@Body() body: PlayerCreateDto): PlayerResponseDto {
    return this.playersService.createPlayer(body);
  }

  @Put('/:id')
  updatePlayer(
    @Param('id') id: string,
    @Body() body: PlayerUpdateDto,
  ): PlayerResponseDto {
    return this.playersService.updatePlayer(id, body);
  }

  @Delete('/:id')
  deletePlayer(@Param('id') id: string): void {
    return this.playersService.deletePlayer(id);
  }
}
