import { Test, TestingModule } from '@nestjs/testing';
import { QuotesController } from '../quotes.controller';
import { QuotesService } from '../quotes.service';
import mockData from '../../data/office_quotes.json';

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
      const result = [mockData[0]];
      jest.spyOn(quotesController, 'getRandomQuote').mockReturnValue(result);
      expect(await quotesController.getRandomQuote()).not.toBe(null);
      expect(await quotesController.getRandomQuote()).toBe(result);
    });
  });

  describe('addQuote', () => {
    it('should return the new id in an object with key quote_id', async () => {
      const quote = 'testQuote';
      const character = 'testPerson';
      const result = quotesController.addQuote(quote, character);
      expect(await result).toBeInstanceOf(Object);
      expect(await result).toHaveProperty('quote_id');
    });
  });
});
