import fs from "fs";
import * as dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

const envLocalPath = "./.env.local";
const envPath = ".env";

let hasEnvLocal = false;
try {
  fs.accessSync(envLocalPath);
  hasEnvLocal = true;
} catch (e) {}

dotenv.config({ path: hasEnvLocal ? envLocalPath : envPath });

const config: CodegenConfig = {
  overwrite: true,
  schema:
    process.env.NODE_ENV === "production"
      ? process.env.THE_GRAPH_URL
      : process.env.THE_GRAPH_URL_LOCAL,
  documents: "src/lib/graphRequests.ts",
  generates: {
    "./types/graphs/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;
