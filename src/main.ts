import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
	transform: true,
	whitelist: true
  }))

  const config = new DocumentBuilder()
  .setTitle('Documentação com Swagger')
  .setDescription(
	'Documentação da API criada para CRUD de produtos.',
  )
  .setVersion('1.0')
  .addTag('produtos')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,{
	customSiteTitle: 'Minha API',
	customCss: `
	@charset "UTF-8";
	`,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
