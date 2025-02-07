import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-unused-vars": "off", // Disable no-unused-vars rule
      "@typescript-eslint/no-unused-vars": "off", // Disable TypeScript-specific unused-vars rule
      "react/no-unescaped-entities": "off", // Disable the rule for unescaped characters
      "react-hooks/exhaustive-deps": "warn" // Keep as a warning
    }
  }
];

export default eslintConfig;
