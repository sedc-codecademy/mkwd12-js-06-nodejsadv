import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubCreateDto } from './dtos/club-create.dto';
import { Club } from './club.entity';
import { ClubUpdateDto } from './dtos/club-update.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Clubs')
@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all clubs' })
  @ApiOkResponse({
    type: [Club],
    description: 'All clubs retrieved successfully',
  })
  getClubs(): Promise<Club[]> {
    return this.clubsService.getClubs();
  }

  @Post('/')
  @ApiOperation({ summary: 'Create a new club' })
  @ApiCreatedResponse({
    type: Club,
    description: 'Club created successfully',
  })
  @ApiBody({ type: ClubCreateDto })
  createClub(@Body() body: ClubCreateDto): Promise<Club> {
    return this.clubsService.createClub(body);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update a club' })
  @ApiOkResponse({
    type: Club,
    description: 'Club updated successfully',
  })
  @ApiBody({ type: ClubUpdateDto })
  @ApiParam({ name: 'id', type: 'string' })
  updateClub(
    @Param('id') id: string,
    @Body() body: ClubUpdateDto,
  ): Promise<Club> {
    return this.clubsService.updateClub(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a club' })
  @ApiOkResponse({
    description: 'Club deleted successfully',
  })
  @ApiParam({ name: 'id', type: 'string' })
  @HttpCode(204)
  deleteClub(@Param('id') id: string): Promise<void> {
    return this.clubsService.deleteClub(id);
  }
}
