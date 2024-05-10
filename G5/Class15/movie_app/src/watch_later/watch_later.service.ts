import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WatchLater } from './mongo/watch_later.schema';
import { Model } from 'mongoose';
import { WatchLaterCreationProps } from './types/watch_later';

@Injectable()
export class WatchLaterService {
  constructor(
    @InjectModel(WatchLater.name) private watchLaterModel: Model<WatchLater>,
  ) {}

  async addInWatchForLater(props: WatchLaterCreationProps) {
    const watchForLater = new this.watchLaterModel(props);
    await watchForLater.save();

    return watchForLater;
  }

  async listWatchForLater() {
    const watchForLater = await this.watchLaterModel
      .find()
      .populate('movies')
      .exec();

    // TODO: Create a mapper function
    return watchForLater;
  }
}
