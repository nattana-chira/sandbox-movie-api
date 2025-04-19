import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './libs/error-handler';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  const configService = app.get(ConfigService); // ✅ this is how you get it
  const frontendWebUrl = configService.get<string>('app.frontendWebUrl');
  const port = configService.get<string>('app.port');

  app.enableCors({
    origin: [frontendWebUrl]
  });

  await app.listen(port || 5000);
}
bootstrap();
