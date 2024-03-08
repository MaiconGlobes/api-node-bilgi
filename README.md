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
O swagger ainda não foi implementado, então as rotas estão disponiveis abaixo:
- GET    : /usuario/listar-usuario
- POST   : /usuario/cadastrar-usuario
- PUT    : /usuario/editar-usuario
- DELETE : /usuario/deletar-usuario

## Request e Response 📜
- GET : http://localhost:3005/v1/api/usuario/listar-usuario
```bash
NO BODY
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


