-- Adicionar coluna quartoId à tabela QuartoCelular
ALTER TABLE `resort`.`QuartoCelular` ADD COLUMN `quartoId` INT NULL;

-- Criar índice para a nova coluna
CREATE INDEX `QuartoCelular_quartoId_fkey` ON `resort`.`QuartoCelular`(`quartoId`);

-- Adicionar chave estrangeira
ALTER TABLE `resort`.`QuartoCelular` 
ADD CONSTRAINT `QuartoCelular_quartoId_fkey` 
FOREIGN KEY (`quartoId`) 
REFERENCES `resort`.`Quarto` (`id`)
ON DELETE SET NULL
ON UPDATE CASCADE; 