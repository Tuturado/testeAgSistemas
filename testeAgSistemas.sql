CREATE TABLE produtos(
codigo INT AUTO_INCREMENT,
nome VARCHAR(50) NOT null,
codigo_barras VARCHAR(20),
quantidade DECIMAL(2,1) NOT NULL, 
preco DECIMAL(3, 2) NOT NULL,
PRIMARY KEY(codigo)
);
--Aceitei quantidade como DECIMAL por não saber com qual tipo de produto estou trabalhando.