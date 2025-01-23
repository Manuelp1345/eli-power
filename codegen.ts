import dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

dotenv.config({ path: "./.env" });

const schema = "https://my-prisma-app.onrender.com/graphql";

console.log("using schema", schema);

const config: CodegenConfig = {
  overwrite: true,
  schema: schema,
  documents: ["./graphql/**/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "./graphql/generated.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        namingConvention: {
          typeNames: "change-case#pascalCase",
          enumValues: "change-case#upperCase",
        },
      },
    },
  },
};

export default config;
