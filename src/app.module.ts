import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produtos/entities/produto.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
	ConfigModule.forRoot(),
	TypeOrmModule.forRoot({
		type: 'mariadb',
		host: process.env.DATABASE_HOST,
		port: Number(process.env.DATABASE_PORT),
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_NAME,
		entities: [Produto],
		synchronize: true,
	}),
	ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
