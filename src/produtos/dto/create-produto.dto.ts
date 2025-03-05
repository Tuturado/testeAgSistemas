import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProdutoDto {
 @ApiProperty({
	description: 'Código único de identificação do produto.',
	example: '1',
 })
 codigo: number;

 @ApiProperty({
	description:'Nome do produto.',
	example:'Pão',
 })
 @IsString()
 nome: string;

 @ApiProperty({
	description:'Código de barras do produto.',
	example:'1234',
 })
 @IsString()
 codigo_barras: string;

 @ApiProperty({
	description:'Quantidade do produto em decimal, por não se saber o tipo exato de produto que virá.',
	example:'1.0',
 })
 quantidade: number;

 @ApiProperty({
	description:'Preço do produto.',
	example:'1.99',
 })
 preco: number
}
