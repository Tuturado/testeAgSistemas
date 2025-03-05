import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutosService {
  constructor(
	@InjectRepository(Produto)
	private readonly repository: Repository<Produto>

  ){}

  create(dto: CreateProdutoDto) {
    const produto = this.repository.create(dto);
	this.repository.save(produto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(codigo: number) {
    return  this.repository.findOneBy({ codigo });
  }

  async update(codigo: number, dto: UpdateProdutoDto) {
    const produto = await this.repository.findOneBy({ codigo });
	if (!produto) return null;
	this.repository.merge(produto, dto);
	return this.repository.save(produto);
  }

  async remove(codigo: number) {
	const produto = await this.repository.findOneBy({ codigo });
	if (!produto) return null;
	return this.repository.remove(produto);
  }
}
