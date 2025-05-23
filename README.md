# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Linting with ESLint

This project uses ESLint for code linting with automatic fixing on save.

### Running ESLint Manually

You can run ESLint manually with the following commands:

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix
```

### Auto-fix on Save

There are multiple ways to enable automatic ESLint fixing when you save files:

#### Using npm Script (IDE-independent)

Run the following command in a separate terminal window while you're working:

```bash
npm run lint:watch
```

This will watch for changes to any JavaScript, TypeScript, or Vue files in your project and automatically run ESLint fix when you save a file. This approach works with any editor or IDE.

#### JetBrains IDEs (WebStorm, PhpStorm, etc.)

1. Go to Settings/Preferences
2. Navigate to Languages & Frameworks > JavaScript > Code Quality Tools > ESLint
3. Check "Run eslint --fix on save"

#### VS Code

The project includes a `.vscode/settings.json` file with the following configuration:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  "editor.formatOnSave": false
}
```

This configuration automatically runs ESLint fix on save for JavaScript, TypeScript, and Vue files.
