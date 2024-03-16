// playground.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaygroundService } from './playground.service';
import { PlaygroundController } from './playground.controller';
import { Playground } from './playground.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Playground])],
  providers: [PlaygroundService],
  controllers: [PlaygroundController]
})
export class PlaygroundModule {}