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
  UseGuards,
  ParseIntPipe,
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
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { TrimStringsPipe } from 'src/common/pipes/trim-strings.pipe';

// whitelist: If set to true, strips validated objects of any properties that do not use any validation decorators.
// forbidNonWhitelisted: If true, instead of stripping non-whitelisted properties, throws an error.
// transform: If true, transforms the object to the class instance it expects (e.g., the DTO class).

@ApiBearerAuth() // adds the Bearer token authentication to the Swagger UI (for all endpoints in this controller)
@UseGuards(JwtAuthGuard, RolesGuard) // Use the JwtAuthGuard and RolesGuard guards for all endpoints in this controller. This can be used to protect a single endpoint as well.
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get('/')
  @Roles(Role.USER, Role.ADMIN) // This endpoint can be accessed by both users and admins.
  @ApiOperation({ summary: 'Retrieve all players' })
  @ApiOkResponse({
    description: 'All players are retrieved',
    type: [Player],
  })
  getPlayers(@Query() query: PlayerQueryDto): Promise<Player[]> {
    return this.playersService.getPlayers(query);
  }

  @Get('/:id')
  @Roles(Role.USER, Role.ADMIN) // This endpoint can be accessed by both users and admins.
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

  @ApiOperation({ summary: 'Retrieve a player by age' })
  @ApiOkResponse({
    description: 'Player with certain age is retrieved',
    type: Player,
  })
  @ApiParam({
    name: 'age',
    type: Number,
    description: 'Player age',
  })
  @Get('/age/:age')
  getFirstPlayerByAge(
    @Param('age', ParseIntPipe) age: number,
  ): Promise<Player> {
    return this.playersService.getFirstPlayerByAge(age);
  }

  @Post('/')
  @Roles(Role.ADMIN) // This endpoint can be accessed only by admins.
  @ApiOperation({ summary: 'Create a new player' })
  @ApiCreatedResponse({
    description: 'The player has been created successfully.',
    type: Player,
  })
  @ApiBody({
    type: PlayerCreateDto,
  })
  @UsePipes(new TrimStringsPipe())
  createPlayer(
    @Body() body: PlayerCreateDto,
    @CurrentUser() user: ICurrentUser | undefined,
  ): Promise<Player> {
    return this.playersService.createPlayer(body, user);
  }

  @Put('/:id')
  @Roles(Role.ADMIN) // This endpoint can be accessed only by admins.
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
  @UsePipes(new TrimStringsPipe())
  updatePlayer(
    @Param('id') id: string,
    @Body() body: PlayerUpdateDto,
  ): Promise<Player> {
    return this.playersService.updatePlayer(id, body);
  }

  @Delete('/:id')
  @Roles(Role.ADMIN) // This endpoint can be accessed only by admins.
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
