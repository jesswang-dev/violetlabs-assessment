import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { Quote } from './quote.model';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}
  @Post()
  addQuote(
    @Body('quote') quoteContent: string,
    @Body('character') quoteChar: string,
  ): any {
    const generatedId = this.quotesService.addQuote(quoteContent, quoteChar);
    return { quote_id: generatedId };
  }
  @Get()
  getRandomQuote(): any {
    const randomQuote: Quote = this.quotesService.getRandomQuote();
    return randomQuote;
  }
}
