const {
  deleteComponents,
  deleteScreens,
  deleteReduxStore,
  deleteActions,
  deleteReducers,
} = require("../bin/delete");

const {
  createComponent,
  createScreen,
  createReduxStore,
  createAction,
  createReducer,
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
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/del-test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/components/del-test/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/components/del-test/styles.ts")).toBe(false);
      expect(
        fs.existsSync("./src/components/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed component", async () => {
    try {
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/components/del-test/styles.ts")).toBe(false);
      expect(
        fs.existsSync("./src/components/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
      deleteComponents(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/components/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/components/del-test/styles.ts")).toBe(false);
      expect(
        fs.existsSync("./src/components/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
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
      expect(fs.existsSync("./src/screens/del-test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/del-test/styles.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/del-test/functions/index.ts")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/screens/del-test/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteScreens(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/screens/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/styles.ts")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/functions/index.ts")).toBe(
        false
      );
      expect(
        fs.existsSync("./src/screens/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete not existed screen", async () => {
    try {
      deleteScreens(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/screens/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/styles.ts")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/functions/index.ts")).toBe(
        false
      );
      expect(
        fs.existsSync("./src/screens/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
      deleteScreens(["del-test"], "");
      await sleep(100);
      expect(fs.existsSync("./src/screens/del-test/index.tsx")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/styles.ts")).toBe(false);
      expect(fs.existsSync("./src/screens/del-test/functions/index.ts")).toBe(
        false
      );
      expect(
        fs.existsSync("./src/screens/del-test/__tests__/index.spec.tsx")
      ).toBe(false);
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
      expect(fs.existsSync("src/redux/")).toBe(true);
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
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete action tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });

  test("should delete action for existed reducer", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      createReducer("test", false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      createAction(["test", "del-test"], false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(true);
      deleteActions(["test", "del-test"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should delete action for not existed reducer", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
      createAction(["test", "del-test"], false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(false);
      deleteActions(["test", "del-test"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should delete multiple actions for existed reducer", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      createReducer("test", false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      createAction(["test", "del-test", "del-test-2"], false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/test/del-test-2.ts")).toBe(
        true
      );
      deleteActions(["test", "del-test", "del-test-2"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/del-test.ts")).toBe(false);
      expect(fs.existsSync("./src/redux/actions/test/del-test-2.ts")).toBe(
        false
      );
    } catch (err) {
      fail(err);
    }
  });
});

describe("delete reducer tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });

  test("should delete reducer for existed reducer", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      createReducer("test", false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      deleteReducers(["test"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should not delete reducer for not existed reducer", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
      deleteReducers(["test"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should delete multiple existed reducers", async () => {
    try {
      createReduxStore(false, true, false);
      await sleep(100);
      createReducer("test", false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      createReducer("test-2", false, true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test-2/index.ts")).toBe(true);
      deleteReducers(["test", "test-2"], true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
      expect(fs.existsSync("./src/redux/reducers/test-2/index.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });
});
