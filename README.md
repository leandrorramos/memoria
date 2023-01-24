# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



# Como funciona:
Jogo de memoria para crianças de uma disciplina específica da escola X. O jogo é conduzido um uma lousa digital e moderado por um Professor.


 - Um json com as informações dos cards é lido do arquivo public/data.json e adicionado a um array
 - O array em seguida é reoganizado de forma aleatório e disposto em linhas e colunas (4 x 4)
 - Quando duas cartas iguais forem viradas, eles permanecem sendo exibidas. Caso contrário, após um  segundo de delay, as cartas são viradas novamente.

 - NOTA¹: somente duas cartas podem ser viradas por rodada