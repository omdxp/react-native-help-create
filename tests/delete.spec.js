const {
  deleteComponents,
  deleteScreens,
  deleteReduxStore,
} = require("../bin/delete");

const {
  createComponent,
  createScreen,
  createReduxStore,
} = require("../bin/create");

const { fail, sleep, clear } = require("./utils");

const fs = require("file-system");

describe("delete component tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should delete component", async () => {
    try {
      deleteComponents(["del-test"], "");
      await sleep(100);
      createComponent("del-test", false, true, "", "", false);
      await sleep(100);
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/components/del-test/styles.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed component", async () => {
    try {
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(console.log).lastCalledWith(
        "src/components/del-test/ does not exist"
      );
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete screen tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();

  test("should delete screen", async () => {
    try {
      deleteScreens(["del-test"], "");
      await sleep(100);
      createScreen("del-test", false, true, "", "", false);
      await sleep(100);
      deleteScreens(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/screens/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/styles.ts")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/functions/index.ts")).toBe(
        false
      );
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed screen", async () => {
    try {
      deleteScreens(["del-test"], "");
      await sleep(100);
      deleteScreens(["del-test"], "");
      await sleep(100);
      expect(console.log).lastCalledWith("src/screens/del-test does not exist");
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete redux tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  console.log = jest.fn();
  test("should delete redux", async () => {
    try {
      deleteReduxStore();
      await sleep(100);
      createReduxStore(false, true);
      await sleep(100);
      deleteReduxStore();
      await sleep(100);
      expect(fs.existsSync("src/redux/")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed redux", async () => {
    try {
      deleteReduxStore();
      await sleep(100);
      expect(fs.existsSync("src/redux/")).toBe(false);
      expect(console.log).lastCalledWith("src/redux/ does not exist");
    } catch (err) {
      fail(err);
    }
  });
});