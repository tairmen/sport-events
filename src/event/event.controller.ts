import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) { }

    @Get()
    findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() event: Event): Promise<Event> {
        return this.eventService.create(event);
    }

    // More routes for updating and deleting events
}