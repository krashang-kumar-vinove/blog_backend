import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from "dotenv";
config();

async function bootstrap() {
  console.log("ENV LOADED:", process.env.POSTGRES_URL);

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('Blog APIs using Mongo (posts) and Postgres (users)')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Backend listening on ${port}`);
}

bootstrap();
