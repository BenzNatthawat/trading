import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(limiter);
  await app.listen(3000);
}
bootstrap();
