import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { User } from '../user/user.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find({ relations: ['playground', 'participants'] });
  }

  async findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
      relations: ['playground', 'participants'],
    });
  }

  async create(event: Event): Promise<Event> {
    const newEvent = this.eventRepository.create(event);
    return this.eventRepository.save(newEvent);
  }

  async update(id: number, event: Event): Promise<Event> {
    await this.eventRepository.update(id, event);
    return this.eventRepository.findOne({
      where: { id },
      relations: ['playground', 'participants'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }

  async addParticipant(eventId: number, userId: number): Promise<Event> {
    const event = await this.findOne(eventId);
    event.participants.push(await this.eventRepository.manager.findOneBy(User, { id: userId }));
    return this.eventRepository.save(event);
  }

  async removeParticipant(eventId: number, userId: number): Promise<Event> {
    const event = await this.findOne(eventId);
    event.participants = event.participants.filter((user) => user.id !== userId);
    return this.eventRepository.save(event);
  }
}