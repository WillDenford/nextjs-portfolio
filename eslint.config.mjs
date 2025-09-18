import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
       // Syntax consistency rules
      "semi": ["error", "never"],
      "quotes": ["error", "double", { "avoidEscape": true }],
      "jsx-quotes": ["error", "prefer-double"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "computed-property-spacing": ["error", "never"],
      "space-before-blocks": ["error", "always"],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-infix-ops": "error",
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "linebreak-style": ["error", "unix"],
    },
  },
]

export default eslintConfig
