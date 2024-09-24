import { Module } from '@nestjs/common';
import { PlaygroundModule } from './playground/playground.module';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [
    AppConfigModule, 
    DatabaseModule,
    PlaygroundModule,
    UserModule,
    EventModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}