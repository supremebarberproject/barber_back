import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Barber Back")
    .setDescription("API para la barberia de Don Julio")
    .setVersion("1.0")
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("API", app, documentFactory, {
    customSiteTitle: "Barberia Don Julio",
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
