module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // Add any custom rules here
    'vue/multi-word-component-names': 'off', // Optional: disable requirement for multi-word component names
    'vue/no-multiple-template-root': 'off', // For Vue 3 which allows multiple root elements
    'vue/no-v-text-v-html-on-component': 'off', // Downgrade to warning instead of error
    'no-undef': 'off', // Turn off no-undef to allow Nuxt composables

    // Rules for component attributes on new lines
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below'
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },      
      multiline: {
        max: 1
      }
    }],
    // Rule for proper indentation of HTML and attributes
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }]
  },
  globals: {
    // Define Nuxt composables as globals
    useRoute: 'readonly',
    useRuntimeConfig: 'readonly',
    useFetch: 'readonly',
    definePageMeta: 'readonly',
    useHead: 'readonly'
  }
}
