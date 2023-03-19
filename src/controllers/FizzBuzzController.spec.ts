/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import FizzBuzzService from '../../src/services/FizzBuzzService';
import { FizzBuzzController } from './FizzBuzz.controller';


describe('FizzBuzzController', () => {

    let fizzBuzzController: FizzBuzzController;

    beforeEach(async () => {
      const app: TestingModule = await Test.createTestingModule({
        controllers: [FizzBuzzController],
        providers: [FizzBuzzService],
      }).compile();
  
      fizzBuzzController = app.get<FizzBuzzController>(FizzBuzzController);
    });

    describe('root 2', ()=>{
      it('Should return empty for non multiples of 3 or 5', () => {
        expect(fizzBuzzController.getFizzBuzz(1)).toBe("");
        expect(fizzBuzzController.getFizzBuzz(2)).toBe("");
        expect(fizzBuzzController.getFizzBuzz(4)).toBe("");
      });
      it('should return fizz for multiples of 3', ()=>{
        expect(fizzBuzzController.getFizzBuzz(3)).toEqual("Fizz");
        expect(fizzBuzzController.getFizzBuzz(6)).toEqual("Fizz");
        expect(fizzBuzzController.getFizzBuzz(9)).toEqual("Fizz");
      })
      it('should return Buzz for multiples of 5',()=>{
        expect(fizzBuzzController.getFizzBuzz(5)).toEqual("Buzz");
        expect(fizzBuzzController.getFizzBuzz(10)).toEqual("Buzz");
      })
      it('Should return FizzBuzz for multiples of 3 and 5',()=>{
        expect(fizzBuzzController.getFizzBuzz(15)).toEqual("FizzBuzz")
        expect(fizzBuzzController.getFizzBuzz(30)).toEqual("FizzBuzz")
        expect(fizzBuzzController.getFizzBuzz(45)).toEqual("FizzBuzz")
      })
      it('Should return Pepe for multiples of 7', ()=>{
        expect(fizzBuzzController.getFizzBuzz(7)).toEqual('Pepe');
      })
    })

  });
  