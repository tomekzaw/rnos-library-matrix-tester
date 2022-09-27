const fs = require("fs");

const path = "MyApp/android/gradle.properties";

let text = fs.readFileSync(path, 'utf-8');

text = text.replace('newArchEnabled=false', 'newArchEnabled=true');

fs.writeFileSync(path, text);
