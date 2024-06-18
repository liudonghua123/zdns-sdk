import process from "process";
// import * as fs from 'fs';
// import { fileURLToPath } from 'url';

// // Read the current directory
// const files = await fs.promises.readdir(fileURLToPath(import.meta.url));

// // Export all from the js files in the current directory
// for (const file of files) {
//   if (file.endsWith('.ts')) {
//     const moduleName = file.replace('.ts', '.js');
//     // TODO: Parsing error: Module specifier must be a string literal.
//     export * from `./${moduleName}`;
//   }
// }

import { AUTH_INPUT } from "./types.js";

export function init(auth_info?: AUTH_INPUT) {
  process.env.APP_USERNAME =
    process.env.APP_USERNAME || auth_info?.app_username;
  process.env.APP_PASSWORD =
    process.env.APP_PASSWORD || auth_info?.app_password;
  process.env.BASE_URL = process.env.BASE_URL || auth_info?.base_url;
  if (
    !process.env.APP_USERNAME ||
    !process.env.APP_PASSWORD ||
    !process.env.BASE_URL
  ) {
    throw new Error(
      "Please provide app_username, app_password and base_url in the environment variables or as an argument to init() function.",
    );
  }
}

export * from "./shared-rrs.js";
