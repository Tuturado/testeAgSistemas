import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProdutoDto {
 @ApiProperty({
	description: 'C�digo �nico de identifica��o do produto.',
	example: '1',
 })
 codigo: number;

 @ApiProperty({
	description:'Nome do produto.',
	example:'P�o',
 })
 @IsString()
 nome: string;

 @ApiProperty({
	description:'C�digo de barras do produto.',
	example:'1234',
 })
 @IsString()
 codigo_barras: string;

 @ApiProperty({
	description:'Quantidade do produto em decimal, por n�o se saber o tipo exato de produto que vir�.',
	example:'1.0',
 })
 quantidade: number;

 @ApiProperty({
	description:'Pre�o do produto.',
	example:'1.99',
 })
 preco: number
}
