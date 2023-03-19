import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzBuzzController } from './controllers/FizzBuzz.controller';
import FizzBuzzService from './services/FizzBuzzService';

@Module({
  imports: [],
  controllers: [AppController, FizzBuzzController],
  providers: [AppService, FizzBuzzService],
})
export class AppModule {}
