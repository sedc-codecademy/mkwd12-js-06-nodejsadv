import { Body, Controller, Get, Post } from '@nestjs/common';
import { WatchLaterDTO } from './dto/watch_later.dto';
import { WatchLaterService } from './watch_later.service';
import { WatchLaterCreationProps } from './types/watch_later';

@Controller('watch-later')
export class WatchLaterController {
  constructor(private watchLaterService: WatchLaterService) {}

  @Post()
  async createWatchForLater(@Body() watchLaterDTO: WatchLaterDTO) {
    const watchLaterCreationProps: WatchLaterCreationProps = {
      title: watchLaterDTO.title,
      movies: watchLaterDTO.movies,
    };

    await this.watchLaterService.addInWatchForLater(watchLaterCreationProps);

    return {
      message: 'Watch for later list added',
    };
  }

  @Get()
  async listWatchForLater() {
    const watchForLater = await this.watchLaterService.listWatchForLater();

    return watchForLater;
  }
}
