import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playground } from './playground.entity';

@Injectable()
export class PlaygroundService {
  constructor(
    @InjectRepository(Playground)
    private playgroundRepository: Repository<Playground>,
  ) {}

  async findAll(): Promise<Playground[]> {
    return this.playgroundRepository.find();
  }

  async findOne(id: number): Promise<Playground> {
    return this.playgroundRepository.findOneBy({ id });
  }

  async create(playground: Playground): Promise<Playground> {
    const newPlayground = this.playgroundRepository.create(playground);
    return this.playgroundRepository.save(newPlayground);
  }

  async update(id: number, playground: Playground): Promise<Playground> {
    await this.playgroundRepository.update(id, playground);
    return this.playgroundRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.playgroundRepository.delete(id);
  }
}