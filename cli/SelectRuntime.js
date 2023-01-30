const fs = require("fs");

const value = process.env.E2E_RUNTIME === "Hermes" ? "true" : "false";

const REACT_NATIVE_MINOR_VERSION = Number(
  process.env.E2E_REACT_NATIVE_VERSION.split(".")[1]
);

const path =
  REACT_NATIVE_MINOR_VERSION >= 71
    ? process.env.E2E_APP_PATH + "/android/gradle.properties"
    : process.env.E2E_APP_PATH + "/android/app/build.gradle";

let text = fs.readFileSync(path, "utf-8");

if (REACT_NATIVE_MINOR_VERSION >= 71) {
  text = text.replace(/hermesEnabled=(false|true)/, "hermesEnabled=" + value);
} else {
  text = text.replace(/enableHermes: (false|true)/, "enableHermes: " + value);
}

fs.writeFileSync(path, text);
