const fs = require("fs");

const path = "MyApp/package.json";

let data = JSON.parse(fs.readFileSync(path));

data.scripts = {
  start: "react-native start",
  "lint:eslint": "eslint . --ext .js,.jsx,.ts,.tsx --max-warnings=0",
  "lint:prettier": "prettier screens App.tsx index.js --check",
  "types:check": "tsc --noEmit",
  "build:android:debug": "react-native run-android --variant=debug",
  "build:android:release":
    "react-native run-android --variant=release --no-packager",
  "build:ios:debug": "react-native run-ios --configuration Debug",
  "build:ios:release":
    "react-native run-ios --configuration Release --no-packager",
  "test:e2e:android:debug": "PLATFORM=android VARIANT=debug jest",
  "test:e2e:android:release": "PLATFORM=android VARIANT=release jest",
  "test:e2e:ios:debug": "PLATFORM=ios VARIANT=debug jest",
  "test:e2e:ios:release": "PLATFORM=ios VARIANT=release jest",
  postinstall: "patch-package",
};

data.jest.moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json", "node"];

fs.writeFileSync(path, JSON.stringify(data, null, 2));
