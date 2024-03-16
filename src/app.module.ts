import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaygroundModule } from './playground/playground.module';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.17.0.3', // Change this to your PostgreSQL server host
      port: 5432, // Change this to your PostgreSQL server port
      username: 'postgres', // Change this to your PostgreSQL username
      password: 'Aa111111', // Change this to your PostgreSQL password
      database: 'sport-events', // Change this to your PostgreSQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entity files
      synchronize: true, // Synchronize the entities with the database (be careful with this in production)
    }),
    PlaygroundModule,
    UserModule,
    EventModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}