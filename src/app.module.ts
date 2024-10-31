import { Module } from '@nestjs/common';
import { PlaygroundModule } from './playground/playground.module';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './config/database.module';
import { AppConfigModule } from './config/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
  imports: [
    AppConfigModule, 
    DatabaseModule,
    PlaygroundModule,
    UserModule,
    EventModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Adjust to your folder
    }),
  ],
  controllers: [ AppController ],
  providers: [],
})
export class AppModule {}