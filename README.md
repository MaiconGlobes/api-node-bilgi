## Instalação ⚒️

Para instalação e implantação do container docker com o banco MySQL e API em NodeJS sáo necessário que baixe o diretório do projeto com git clone, acesse o diretório
onde se encontra o projeto da API e execute os comandos a seguir. 🤘

> É recomendado deixar a execução finalziar por completo para um melhor gerenciamento de dependências.

```bash
# Rode o comendo abaixo se for a primeira vez
docker-compose up -d 

# Rode o comendo abaixo se já tiver subido antes o container
docker-compose up -d --build

```
Em ambiente de desenvolvimento a aplicação NodeJS não apresentou erros ao ser executada. Em caso de erros junto ao docker, rodar a API separadamente para análise.

```bash
# Rode os comandos
yarn
yarn prisma generate
yarn prisma migrate dev
yarn build
yarn start

# Para debug
yarn dev

```
