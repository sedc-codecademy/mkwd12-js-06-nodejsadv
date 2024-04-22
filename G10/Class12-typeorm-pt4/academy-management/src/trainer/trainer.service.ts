import { Injectable } from '@nestjs/common';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Trainer } from './entities/trainer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private trainerRepository: Repository<Trainer>,
  ) {}

  async findAll(): Promise<Trainer[]> {
    return this.trainerRepository.find();
  }

  async findOne(id: number): Promise<Trainer> {
    return this.trainerRepository.findOneBy({ id });
  }

  async create(createTrainerDto: CreateTrainerDto): Promise<Trainer> {
    const trainer = this.trainerRepository.create(createTrainerDto);
    await this.trainerRepository.save(trainer);
    return trainer;
  }

  async update(
    id: number,
    updateTrainerDto: UpdateTrainerDto,
  ): Promise<Trainer> {
    let trainer = await this.trainerRepository.findOneBy({ id });
    trainer = this.trainerRepository.merge(trainer, updateTrainerDto);
    await this.trainerRepository.save(trainer);
    return trainer;
  }

  async remove(id: number): Promise<void> {
    this.trainerRepository.delete(id);
  }
}
