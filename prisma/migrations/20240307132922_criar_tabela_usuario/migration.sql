-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,
    `cpf` VARCHAR(11) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `endereco` VARCHAR(100) NULL,
    `numero` VARCHAR(10) NULL,
    `bairro` VARCHAR(35) NULL,
    `municipio` VARCHAR(50) NOT NULL,
    `uf` VARCHAR(2) NOT NULL,
    `cep` VARCHAR(8) NULL,
    `email` VARCHAR(200) NOT NULL,
    `senha` VARCHAR(200) NOT NULL,

    UNIQUE INDEX `usuario_cpf_key`(`cpf`),
    UNIQUE INDEX `usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
