# RNOS Library Matrix Tester

Run E2E tests of SWM libraries on different versions of React Native and across all configurations.

### Usage

1. Clone the repository:
```sh
git clone https://github.com/software-mansion-labs/rnos-library-matrix-tester
cd rnos-library-matrix-tester
```
2. Create a new branch:
```sh
git checkout -b @tomekzaw/test-reanimated-3.0.0-rc.11
```
3. Specify the version of your library:
```diff
-yarn add react-native-reanimated@3.0.0-rc.10
+yarn add file:../react-native-reanimated-3.0.0-rc.11.tgz
```
4. Commit and push the changes:
```sh
git add cli/InstallYarnDependencies.sh react-native-reanimated-3.0.0-rc.11.tgz
git commit -m "Test Reanimated 3.0.0-rc.11"
git push --set-upstream origin @tomekzaw/test-reanimated-3.0.0-rc.11
```
5. Run workflow for your branch ([click here](https://github.com/software-mansion-labs/rnos-library-matrix-tester/actions/workflows/e2e.yml)).

### Rules

1. Please do not commit `.tgz` files to main branch.
2. Don't forget to delete your branch when you no longer use it.
3. Branches older than 30 days may be removed without prior notice.
4. If your branch introduces new features or bugfixes, submit a pull request.

### Project structure

- `.github/workflows/ci.yml` &ndash; GitHub Actions workflow file, unified for Android and iOS. This file should directly run bash scripts from the `cli/` directory without any arguments or invoke commands that are specific to GitHub Actions (e.g. creating an Android emulator).

- `app/` &ndash; this directory contains files that will be copied into the freshly created app.
  - `__tests__/e2e.test.ts` &ndash; the source code of E2E tests including setup and teardown of the client
  - `patches/` &ndash; diffs for patch-package
  - `screens/` &ndash; components mounted screens used during E2E testing
  - `utils.ts` &ndash; implementation of `testUtils` function that lets you set a `testID` for tested components on both platforms

- `cli/` &ndash; this directory contains bash scripts that perform single steps of the workflow. Some of them were easier to implement in JavaScript and the bash wrappers are just for the sake of consistency. These scripts should not accept and arguments or flags, all configuration should be passed as environmental variables. These scripts should be path-agnostic, meaning you shouldn't use relative paths from the scripts, use `SCRIPT_DIR` instead.

- `run.sh` &ndash; this script allows you to run the full workflow locally on your computer. Feel free to tweak the parameters or temporarily comment out redundant steps to make development easier thanks to shorter feedback cycle.

### TODO

- [ ] Support nightly version of React Native
- [ ] Fix code style in `app/` directory
- [ ] Rewrite Bash scripts to Python
- [ ] Run matrix tests locally with CLI
