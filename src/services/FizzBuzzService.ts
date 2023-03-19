/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzBuzzService {
    execute(number:number):string{

        const map = {
            3: 'Fizz',
            5: 'Buzz',
            7: 'Pepe'
        }

        let output = "";

        Object.entries(map).forEach((keyValuePair)=>{
            if(number % parseInt(keyValuePair[0]) === 0){
                output+=keyValuePair[1]
            }
        })

        return output;
    }
}

export default FizzBuzzService