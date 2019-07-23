# JS Engine e Browser API

Esse tópico se refere ao estudo das caracteristicas do JavaScript.

Para tal realizaremos alguns exercícios.

## Pontos chave

1. Estrutura de Projeto
2. Leitura de Dados a partir de Arquivo;
3. Apresentação de dados na tela;
4. Leitura de dados através de requisição Http;
5. Apresentação de dados através de componentes reutilizaveis estilizados;

## Informações

Serão fornecidos arquivos base com os dados necessários e sua respectivas urls

### Post

https://jsonplaceholder.typicode.com/posts

```typescript
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
```

### User

https://jsonplaceholder.typicode.com/users

```typescript
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
```
