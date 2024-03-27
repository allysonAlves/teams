# Teams

Este é um aplicativo móvel desenvolvido com React Native que oferece funcionalidades para autenticação de usuários, cadastro de grupos e cadastro de alunos dentro desses grupos. O aplicativo utiliza styled-components/native para estilização e navegação Stack para navegar entre telas.

## Funcionalidades

- **Login e Autenticação**: Os usuários podem fazer login no aplicativo usando suas credenciais. A autenticação é baseada em JWT (JSON Web Tokens) para garantir a segurança.
  
- **Cadastro de Grupos**: Os usuários podem cadastrar grupos, atribuindo um nome e uma descrição a cada grupo.

- **Cadastro de Alunos**: Dentro de cada grupo, os usuários podem adicionar informações sobre os alunos, como nome, idade, e outras informações relevantes.

## Pré-requisitos

Antes de iniciar, verifique se você possui o seguinte instalado em sua máquina:

- Node.js
- npm (ou Yarn)
- React Native CLI
- Android Studio (para desenvolvimento Android) ou Xcode (para desenvolvimento iOS)

## Instalação

1. Clone o repositório para o seu ambiente local:

git clone https://github.com/seu-usuario/nome-do-repositorio.git


2. Navegue até o diretório do projeto:

cd nome-do-repositorio


3. Instale as dependências do projeto:

```
yarn install
```
necessário uma api para login jwt.
projeto em node que foi utilizado para efetuar o login nesse projeto
https://github.com/allysonAlves/login_jwt

4. rodar servidor login_jwt:
```
yarn start
```

5. adicione um .env na raiz do projeto teams e adicone o endereço url que a api está rodando:
```
  EXPO_PUBLIC_API_URL=http://000.000.00.000/
```

4. Inicie o aplicativo teams:

```
expo start
```
ou
```
yarn start
```
