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
## Rotas 🌍
O swagger ainda não foi implementado, então as rotas estão disponiveis abaixo, lembrando que nenhum possui token no header.
- GET    : /usuario/listar-usuario
- POST   : /usuario/cadastrar-usuario
- PUT    : /usuario/editar-usuario
- DELETE : /usuario/deletar-usuario

## Request e Response 📜
- GET : http://localhost:3005/v1/api/usuario/listar-usuario
```bash
[NO BODY]
```
- POST : http://localhost:3005/v1/api/usuario/cadastrar-usuario
```bash
{
  "usuario": {
    "nome": "Joao paulo assis",
    "email": "joao@teste.com",
    "senha": "123456",
    "cpf": "98585810921",
    "data_nascimento": "2024-03-08T04:08:53.468Z",
    "endereco": "Rua teste",
    "numero": "S/N",
    "bairro": "bairro teste",
    "municipio": "Rio Claro",
    "uf": "SP",
    "cep": "13502450"
  }
}
```
- PUT : http://localhost:3005/v1/api/usuario/editar-usuario
```bash
{
  "usuario": {
    "id": "03755555-20fe-43f4-b8bb-edc518b7145b",
    "nome": "Joao paulo assis",
    "email": "joao@teste.com",
    "senha": "123456",
    "cpf": "98585810921",
    "data_nascimento": "2024-03-08T04:08:53.468Z",
    "endereco": "Rua teste",
    "numero": "S/N",
    "bairro": "bairro teste",
    "municipio": "Rio Claro",
    "uf": "SP",
    "cep": "13502450"
  }
}
```
- DELETE : http://localhost:3005/v1/api/usuario/editar-usuario
```bash
[NO BODY] -> [QUERY] /deletar-usuario?id=41ebb372-c938-47b8-aed4-87337f9c894c
```
## Padrão de retorno
SUCESSO: 200 OK - [Listar todos]
```bash
{
  "retorno": {
    "status": "Sucesso",
    "codigo_status": 1,
    "dados": [
      {
        "id": "ae51ae8c-55f8-4299-b522-69f3f769cbd5",
        "nome": "Maico Damião Globes",
        "cpf": "44444444444",
        "data_nascimento": "2005-01-01T00:00:00.000Z",
        "endereco": "Avenida 9 JG",
        "numero": null,
        "bairro": null,
        "municipio": "ddd",
        "uf": "",
        "cep": "13502470",
        "email": "maico-globes@hotmail.com"
      }
    ]
  }
}
```

SUCESSO: 201 Created - [Criar registro]
```bash
{
  "retorno": {
    "status": "Sucesso",
    "codigo_status": 1,
    "dados": {
      "id": "ceda1851-c21c-4f78-b212-c936daf9aee3",
      "nome": "Alguém 72024p.m.39PM39PM39",
      "cpf": "48000000399",
      "data_nascimento": "2024-03-08T00:00:00.000Z",
      "endereco": "",
      "numero": "S/N",
      "bairro": "bairro teste",
      "municipio": "Rio Rio Claro",
      "uf": "SP",
      "cep": "13502470",
      "email": "1709858919@teste.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjE3MDk4NTg5MTlAdGVzdGUuY29tIiwidGlwbyI6InJlZnJlc2hfdG9rZW4iLCJpYXQiOjE3MDk4NTg5MTksImV4cCI6MTcwOTg1ODkyOX0.o5x1-X8GMKsDKZwzRhvUUslEJuF1H94itaYCXTjPICs"
    }
  }
}
```
SUCESSO: 200 Ok - [Registro não localizado]
```bash
{
  "retorno": {
    "status": "Não localizado",
    "codigo_status": 3,
    "mensagens": [
      {
        "codigo": "22",
        "descricao": "Usuário não localizado para exclusão dos dados."
      }
    ]
  }
}
```
