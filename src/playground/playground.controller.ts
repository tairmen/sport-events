import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PlaygroundService } from './playground.service';
import { Playground } from './playground.entity';

@Controller('playgrounds')
export class PlaygroundController {
    constructor(private readonly playgroundService: PlaygroundService) { }

    @Get()
    findAll(): Promise<Playground[]> {
        return this.playgroundService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Playground> {
        return this.playgroundService.findOne(+id);
    }

    @Post()
    create(@Body() playground: Playground): Promise<Playground> {
        return this.playgroundService.create(playground);
    }

    // More routes for updating and deleting playgrounds
}