import { Injectable } from '@nestjs/common';
import { Quote } from './quote.model';
import quotesData from 'src/data/office_quotes.json';

@Injectable()
export class QuotesService {
  getRandomQuote() {
    //generate a random number between 0 and the databases length
    const length: number = quotesData.length;
    const randomNumber: number = Math.round(length * Math.random());
    // console.log('random number', randomNumber);
    const randomQuote: Quote = quotesData[randomNumber];
    // console.log(randomQuote);
    return randomQuote;
  }

  addQuote(quote: string, character: string) {
    const id = quotesData.length;
    const newQuote = new Quote(id, quote, character);
    quotesData.push(newQuote);
    //console.log('newQuote', newQuote);
    return id;
  }
}
