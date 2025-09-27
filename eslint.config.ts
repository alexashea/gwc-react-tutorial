import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist/', 'node_modules/']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, 'react': pluginReact },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'comma-dangle': ['warn', 'never'],
      'max-len': ['warn', { 'code': 100 }],
      'quotes': ['error', 'single'],
      'react/react-in-jsx-scope': ['off']
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: '19'
      }
    }
  },
  {
    rules: {
      'react/react-in-jsx-scope': ['off']
    }
  }
]);
