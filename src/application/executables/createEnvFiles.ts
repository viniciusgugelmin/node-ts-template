const fs = require("fs");

const envsSetup = [".env", ".env.development", ".env.test"];

for (const env of envsSetup) {
  if (fs.existsSync(env)) continue;

  fs.copyFileSync(`.env.example`, env);
}
