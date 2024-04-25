import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Trainer) private trainersRepo: Repository<Trainer>,
  ) {}

  create(createTrainerDto: CreateTrainerDto) {
    return this.trainersRepo.save(createTrainerDto);
  }

  findAll() {
    return this.trainersRepo.find({});
  }

  async findOne(id: number) {
    try {
      const foundTrainer = await this.trainersRepo.findOneOrFail({
        where: { id },
        //Load relations ids overwrites relations so be careful when using it
        // loadRelationIds: true,
        relations: {
          mentorSubjects: true,
          assistantSubjects: true,
        },
      });

      return foundTrainer;
    } catch (error) {
      throw new NotFoundException('Trainer not found!');
    }
  }

  update(id: number, updateTrainerDto: UpdateTrainerDto) {
    return `This action updates a #${id} trainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainer`;
  }
}
