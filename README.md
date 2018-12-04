# wheresmycar-back
Backend do projeto da Hackadeira @CIn -UFPE
Essa API é responsável pelo cadastro de cartões e vagas e pelo gerenciamento dos cartões que estão em uso

## Tecnologias
- Linguagem: Node.js (v10)
- Banco de dados: MongDB
- Docker compose
- Dashboard feito em React.js
- Express para construir a API

## Como excutar o projeto
```bash
$ npm start
```

## Docker
Utilizamos Docker compose para executar a API e o banco de dados. Para levantar os dois juntos executar o seguinte comando:
```bash
$ docker-compose up -d --build
```
Para parar os serviços, executar:
```bash
$ docker-compose down
```