
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Dojo Paulista Api')
    .setDescription('The Dojo Paulista API description')
    .setVersion('1.0')
    .addTag('Dojo Paulista End Points')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  process.env.TZ = '-03:00';
  app.enableCors();
  await app.listen(parseInt(process.env.PORT) | 3000);
}
bootstrap();
