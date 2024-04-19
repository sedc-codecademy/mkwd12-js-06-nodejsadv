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
import { ClubsService } from './clubs.service';
import { ClubCreateDto } from './dtos/club-create.dto';
import { Club } from './club.entity';
import { ClubUpdateDto } from './dtos/club-update.dto';
import { ApiTags } from '@nestjs/swagger';

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
  getClubs(): Promise<Club[]> {
    return this.clubsService.getClubs();
  }

  @Post('/')
  createClub(@Body() body: ClubCreateDto): Promise<Club> {
    return this.clubsService.createClub(body);
  }

  @Put('/:id')
  updateClub(
    @Param('id') id: string,
    @Body() body: ClubUpdateDto,
  ): Promise<Club> {
    return this.clubsService.updateClub(id, body);
  }

  @Delete('/:id')
  deleteClub(@Param('id') id: string): Promise<void> {
    return this.clubsService.deleteClub(id);
  }
}
