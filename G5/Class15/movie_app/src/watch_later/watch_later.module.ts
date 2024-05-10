import { Module } from '@nestjs/common';
import { WatchLaterService } from './watch_later.service';
import { WatchLaterController } from './watch_later.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WatchLater, WatchLaterSchema } from './mongo/watch_later.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: WatchLater.name,
        schema: WatchLaterSchema,
        collection: 'watch_later',
      },
    ]),
  ],
  providers: [WatchLaterService],
  controllers: [WatchLaterController],
})
export class WatchLaterModule {}
