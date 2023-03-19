/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FizzBuzzController } from 'src/controllers/FizzBuzz.controller';
import FizzBuzzService from 'src/services/FizzBuzzService';

@Module({
    imports: [],
    controllers: [FizzBuzzController],
    providers: [FizzBuzzService],
  })
  export class FizzBuzzModule {}