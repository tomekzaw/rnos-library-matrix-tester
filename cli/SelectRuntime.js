const fs = require("fs");

const path = process.env.E2E_APP_PATH + "/android/gradle.properties";

let text = fs.readFileSync(path, 'utf-8');

const value = process.env.E2E_RUNTIME === 'Hermes' ? 'true' : 'false';

text = text.replace(/hermesEnabled=(false|true)/, 'hermesEnabled=' + value);

fs.writeFileSync(path, text);
