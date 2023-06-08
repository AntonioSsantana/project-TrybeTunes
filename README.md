# Projeto TrybeTunes 

Este repositório contém o projeto TrybeTunes, um aplicativo desenvolvido em React que permite fazer login e realizar pesquisas de músicas. O objetivo do projeto é fornecer uma plataforma simples e intuitiva para os usuários descobrirem e explorarem novas músicas.

## Dependências

Aqui estão as principais dependências utilizadas no projeto:

- **React** (v18.2.0): Uma biblioteca JavaScript para a construção de interfaces de usuário.
- **React DOM** (v18.2.0): Uma biblioteca para renderização de componentes React no navegador.
- **React Router DOM** (v5.3.3): Uma biblioteca para navegação e roteamento no React.
- **@testing-library/jest-dom** (v5.16.5): Uma biblioteca para testes de DOM no Jest.
- **@testing-library/react** (v13.3.0): Uma biblioteca para testes de componentes React no Jest.
- **@testing-library/user-event** (v13.5.0): Uma biblioteca para simular eventos de usuário nos testes do React.

```json
 "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^5.3.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- **start**: Inicia o aplicativo em ambiente de desenvolvimento.
- **build**: Realiza o build do aplicativo para produção.
- **test**: Executa os testes utilizando o Jest.
- **eject**: Remove a dependência do react-scripts e permite configurar o projeto manualmente.
- **lint:styles**: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.
- **lint**: Executa a verificação de linting nos arquivos JavaScript e JSX utilizando o ESLint.

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint:styles": "npx stylelint '**/*.css'",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js,.jsx"
  }
```

## Configuração do ESLint

O projeto utiliza a configuração "react-app" do ESLint, que é uma configuração padrão recomendada para projetos React.

## Browserslist

O projeto possui a seguinte configuração do Browserslist:

```json
"browserslist": {
  "production": [">0.2%", "not dead", "not op_mini all"],
  "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
}
```

## Dependências de Desenvolvimento

Além das dependências mencionadas acima, o projeto também utiliza algumas dependências de desenvolvimento:

- **eslint-config-trybe-frontend** (v1.3.1): Uma configuração de regras de linting específicas da Trybe.
- **prop-types** (v15.8.1): Uma biblioteca para verificação de tipos das propriedades dos componentes React.
- **stylelint** (v14.11.0): Uma ferramenta de linting para CSS.
- **stylelint-config-standard** (v28.0.0): Uma configuração de regras de linting para CSS.
- **stylelint-order** (v5.0.0): Uma ferramenta para definir a ordem das propriedades CSS nos arquivos.

```
"devDependencies": {
    "eslint-config-trybe-frontend": "1.3.1",
    "prop-types": "^15.8.1",
    "stylelint": "^14.11.0",
    "stylelint-config-standard": "^28.0.0",
    "stylelint-order": "5.0.0"
  }
```

Para mais detalhes sobre como executar esses scripts e configurar o projeto, consulte o arquivo `package.json`.