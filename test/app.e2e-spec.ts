import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/quotes (GET)', () => {
    return request(app.getHttpServer()).get('/quotes').expect(200);
  });
  it('/quotes (POST)', async () => {
    request(app.getHttpServer())
      .post('/quotes')
      .send({ ' quote ': 'Hello World Again!', ' character ': 'Jessica' })
      .expect(200);
  });
});
