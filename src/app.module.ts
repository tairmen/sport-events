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
      host: 'localhost', // Change this to your PostgreSQL server host
      port: 5432, // Change this to your PostgreSQL server port
      username: 'your_username', // Change this to your PostgreSQL username
      password: 'your_password', // Change this to your PostgreSQL password
      database: 'your_database_name', // Change this to your PostgreSQL database name
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