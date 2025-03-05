import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produtos')
export class Produto {
 @PrimaryGeneratedColumn({
	type: 'bigint',
	name: 'codigo',
 })
 codigo: number;

 @Column({
	nullable: false,
	default: '',
 })
 nome: string;

 @Column({
	nullable: true,
	default: '',
 })
 codigo_barras: string;

 @Column({
	type: 'decimal',
	precision: 10,
	scale: 2,
	nullable: false,
	default: 1.00
 })
 quantidade: number;

 @Column({
	type: 'decimal',
	precision: 10,
	scale: 2,
	nullable: false,
	default: 1.00
  })
preco: number;

@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
created_at: Date;

@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
updated_at: Date;

}
