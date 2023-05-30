import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from '../quotes.controller';
import { QuotesService } from '../quotes.service';
import { Quote } from '../quote.model';

describe('QuotesController', () => {
  let quotesController: QuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuotesController],
      providers: [QuotesService],
    }).compile();
    quotesController = module.get<QuotesController>(QuotesController);
  });

  describe('getRandomQuote', () => {
    it('should return a single quote', async () => {
      const result: Quote = quotesController.getRandomQuote();
      expect(result).not.toBe(null);
      expect(result).toHaveLength(1);
      expect(result).toBeInstanceOf(Quote);
    });
  });
});
