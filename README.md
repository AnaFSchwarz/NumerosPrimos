# Numeros Primos
Este repositório contém a implementação de um projeto web que permite que o usuário insira um número inteiro k e calcule o número de inteiros positivos primos n menores que k. A aplicação também contém um histórico das últimas 10 consultas realizadas.

## Tecnologias utilizadas

### Front-end:
- React.js
- Material-UI para estilização

### back-end:
- Node.js
- Express.js

### banco de dados:
- não tem (o histórico é mantido no backend)


## Intalação
Para instalar e executar a aplicação localmente, siga estas etapas:

1. Clone o repositório para o seu ambiente de desenvolvimento:
```
git clone https://github.com/AnaFSchwarz/NumerosPrimos.git
```
    
3. Vá até o diretório do projeto:
```
 cd prime-numbers
```
    
5. Instale as dependências (instale em ./prime-numbers; ./prime-numbers/src/frontend; ./prime-numbers/src/backend):
```
npm install
```
    
5. Inicie o servidor no backend (./prime-numbers/src/backend):
```
node server.js
```

7. Inicie o projeto no diretório (./prime-numbers):
```
npm start
```

A aplicação estará disponível em http://localhost:3000.

## Uso
Abra o navegador e acesse http://localhost:3000.
Insira um número inteiro k no campo fornecido.
Clique no botão "Calcular" para calcular o número de números primos menores que k.
O resultado será exibido na tela, juntamente com o histórico das últimas consultas realizadas.
