const { combineComponents, combineScreens } = require("../bin/combine");
const { createComponent, createScreen } = require("../bin/create");
const { deleteComponents, deleteScreens } = require("../bin/delete");
const { sleep, fail, clear } = require("./utils");

const fs = require("file-system");

describe("combine components tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should combine components", async () => {
    try {
      createComponent("test1", true, "", "", false);
      await sleep(100);
      createComponent("test2", true, "", "", false);
      await sleep(100);
      combineComponents(["test1", "test2"], "folder");
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test1/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test1/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/components/folder/test1/__tests__/index.spec.tsx")
      ).toBe(true);
      expect(fs.existsSync("./src/components/folder/test2/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test2/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/components/folder/test2/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test1", "test2"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not combine not existed components", async () => {
    try {
      createComponent("test3", true, "", "", false);
      await sleep(100);
      combineComponents(["test1", "test2"], "folder");
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test1/index.tsx")).toBe(
        false
      );
      deleteComponents(["test3"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("combine screens tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should combine screens", async () => {
    try {
      createScreen("test1", true, "", "", false);
      await sleep(100);
      createScreen("test2", true, "", "", false);
      await sleep(100);
      combineScreens(["test1", "test2"], "folder");
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test1/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test1/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test1/functions/index.ts")
      ).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test1/__tests__/index.spec.tsx")
      ).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test2/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test2/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test2/functions/index.ts")
      ).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test2/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteScreens(["test1", "test2"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not combine not existed screens", async () => {
    try {
      createScreen("test3", true, "", "", false);
      await sleep(100);
      combineScreens(["test1", "test2"], "folder");
      await sleep(100);
      expect(console.log).lastCalledWith("Check if all of these screens exist");
      deleteScreens(["test3"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});
