/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { FizzBuzzService } from '../services/FizzBuzzService';

@Controller("fizzbuzz")
export class FizzBuzzController {

    constructor(private readonly fizzBuzzService:FizzBuzzService){}

    @Get(':number')
    getFizzBuzz(@Param('number') number){
        return this.fizzBuzzService.execute(number); 
    }

}