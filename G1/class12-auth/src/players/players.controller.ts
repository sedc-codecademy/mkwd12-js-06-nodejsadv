import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Headers,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayerCreateDto } from './dtos/player-create.dto';
import { PlayerUpdateDto } from './dtos/player-update.dto';
import { PlayerQueryDto } from './dtos/player-query.dto';
import { Player } from './player.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { ICurrentUser } from '../common/types/current-user.interface';

// whitelist: If set to true, strips validated objects of any properties that do not use any validation decorators.
// forbidNonWhitelisted: If true, instead of stripping non-whitelisted properties, throws an error.
// transform: If true, transforms the object to the class instance it expects (e.g., the DTO class).

@ApiBearerAuth()
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@UseGuards(JwtAuthGuard)
@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  @ApiOperation({ summary: 'Retrieve all players' })
  @ApiOkResponse({
    description: 'All players are retrieved',
    type: [Player],
  })
  getPlayers(@Query() query: PlayerQueryDto): Promise<Player[]> {
    return this.playersService.getPlayers(query);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Retrieve a player' })
  @ApiOkResponse({
    description: 'Player with certain ID is retrieved',
    type: Player,
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Player ID',
  })
  getPlayer(@Param('id') id: string): Promise<Player> {
    return this.playersService.getPlayer(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a new player' })
  @ApiCreatedResponse({
    description: 'The player has been created successfully.',
    type: Player,
  })
  @ApiBody({
    type: PlayerCreateDto,
  })
  createPlayer(
    @Body() body: PlayerCreateDto,
    @CurrentUser() user: ICurrentUser | undefined,
  ): Promise<Player> {
    return this.playersService.createPlayer(body, user);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update a player' })
  @ApiResponse({
    status: 200,
    description: 'Updated player successfully.',
    type: Player,
  })
  @ApiBody({
    type: PlayerUpdateDto,
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'Player ID',
  })
  updatePlayer(
    @Param('id') id: string,
    @Body() body: PlayerUpdateDto,
  ): Promise<Player> {
    return this.playersService.updatePlayer(id, body);
  }

  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete a player.',
  })
  @ApiResponse({
    status: 204,
    description: 'Successfully deleted a player',
  })
  @HttpCode(204)
  deletePlayer(@Param('id') id: string): Promise<void> {
    return this.playersService.deletePlayer(id);
  }
}
