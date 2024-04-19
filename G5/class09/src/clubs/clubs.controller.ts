import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubCreateDto } from './dtos/club-create.dto';
import { Club } from './club.entity';
import { ClubUpdateDto } from './dtos/club-update.dto';


@Controller('clubs')
export class ClubsController {
    // constructor(private readonly clubsService: ClubsService) { }

    // @Get()
    // getClubs(): Promise<Club[]> {}

    // @Post('/')
    // createClub(@Body() body: ClubCreateDto): Promise<Club> {}

    // @Put('/:id')
    // updateClub(
    //     @Param('id') id: string,
    //     @Body() body: ClubUpdateDto,
    // ): Promise<Club> { }

    // @Delete('/:id')
    // deleteClub(@Param('id') id: string): Promise<void> {}
}