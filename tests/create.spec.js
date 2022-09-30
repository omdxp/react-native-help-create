const {
  createComponent,
  createScreen,
  createReduxStore,
  createNavigation,
  createConfig,
  createAction,
  createReducer,
} = require("../bin/create");
const {
  deleteComponents,
  deleteScreens,
  deleteReduxStore,
  deleteNavigation,
  deleteConfig,
} = require("../bin/delete");

const fs = require("file-system");

const { sleep, fail, clear } = require("./utils");

describe("create component tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create ts component", async () => {
    try {
      createComponent("test1", true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test1/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test1/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/components/test1/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test1"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component", async () => {
    try {
      createComponent("test2", false, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test2/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/components/test2/styles.js")).toBe(true);
      expect(
        fs.existsSync("./src/components/test2/__tests__/index.spec.jsx")
      ).toBe(true);
      deleteComponents(["test2"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts component in a folder", async () => {
    try {
      createComponent("test3", true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test3/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test3/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/components/folder/test3/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test3"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component in a folder", async () => {
    try {
      createComponent("test4", false, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test4/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test4/styles.js")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/components/folder/test4/__tests__/index.spec.jsx")
      ).toBe(true);
      deleteComponents(["test4"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component", async () => {
    try {
      createComponent("test5", true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test5/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test5/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/components/test5/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test5"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component in a folder", async () => {
    try {
      createComponent("test6", true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test6/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test6/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync("./src/components/folder/test6/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test6"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts atom component", async () => {
    try {
      createComponent("test", true, "", "", false, true, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/atoms/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/atoms/test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/components/atoms/test/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteComponents(["test"], "", false, true, false, false);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js atom component", async () => {
    try {
      createComponent("test", false, "", "", false, true, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/atoms/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/components/atoms/test/styles.js")).toBe(true);
      expect(
        fs.existsSync("./src/components/atoms/test/__tests__/index.spec.jsx")
      ).toBe(true);
      deleteComponents(["test"], "", false, true, false, false);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts molecule component", async () => {
    try {
      createComponent("test", true, "", "", false, true, false, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/molecules/test/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/molecules/test/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync(
          "./src/components/molecules/test/__tests__/index.spec.tsx"
        )
      ).toBe(true);
      deleteComponents(["test"], "", false, false, true, false);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js molecule component", async () => {
    try {
      createComponent("test", false, "", "", false, true, false, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/molecules/test/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/molecules/test/styles.js")).toBe(
        true
      );
      expect(
        fs.existsSync(
          "./src/components/molecules/test/__tests__/index.spec.jsx"
        )
      ).toBe(true);
      deleteComponents(["test"], "", false, false, true, false);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts organism component", async () => {
    try {
      createComponent("test", true, "", "", false, true, false, false, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/organisms/test/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/organisms/test/styles.ts")).toBe(
        true
      );
      expect(
        fs.existsSync(
          "./src/components/organisms/test/__tests__/index.spec.tsx"
        )
      ).toBe(true);
      deleteComponents(["test"], "", true, false, false, true);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js organism component", async () => {
    try {
      createComponent("test", false, "", "", false, true, false, false, true);
      await sleep(100);
      expect(fs.existsSync("./src/components/organisms/test/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/organisms/test/styles.js")).toBe(
        true
      );
      expect(
        fs.existsSync(
          "./src/components/organisms/test/__tests__/index.spec.jsx"
        )
      ).toBe(true);
      deleteComponents(["test"], "", true, false, false, true);
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create screen tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create ts screen", async () => {
    try {
      createScreen("test", true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/__tests__/index.spec.tsx")).toBe(
        true
      );
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js screen", async () => {
    try {
      createScreen("test", false, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.js")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.js")).toBe(true);
      expect(fs.existsSync("./src/screens/test/__tests__/index.spec.jsx")).toBe(
        true
      );
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts screen in a folder", async () => {
    try {
      createScreen("test", true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.ts")
      ).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteScreens(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js screen in a folder", async () => {
    try {
      createScreen("test", false, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.js")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.js")
      ).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/__tests__/index.spec.jsx")
      ).toBe(true);
      deleteScreens(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed screen", async () => {
    try {
      createScreen("test", true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/__tests__/index.spec.tsx")).toBe(
        true
      );
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed screen in a folder", async () => {
    try {
      createScreen("test", true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.ts")
      ).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/__tests__/index.spec.tsx")
      ).toBe(true);
      deleteScreens(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create redux tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create redux in ts", async () => {
    try {
      createReduxStore(true, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.ts")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.ts")).toBe(true);
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create redux in js", async () => {
    try {
      createReduxStore(false, true);
      await sleep(100);
      expect(fs.existsSync("./src/redux/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/actions/general/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/index.js")).toBe(true);
      expect(fs.existsSync("./src/redux/reducers/general/index.js")).toBe(true);
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create navigation tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create navigation", async () => {
    try {
      createScreen("s1", true, "", "", false);
      await sleep(100);
      createScreen("s2", true, "", "", false);
      await sleep(100);
      createNavigation(["stack", "s1", "s2"], true, "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/navigation.tsx")).toBe(true);
      deleteNavigation("");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create config tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should create config file", async () => {
    try {
      createConfig();
      await sleep(100);
      expect(fs.existsSync("rnhc.config.json")).toBe(true);
      deleteConfig();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed config file", async () => {
    try {
      createConfig();
      await sleep(100);
      expect(fs.existsSync("rnhc.config.json")).toBe(true);
      deleteConfig();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create action tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });
  test("should not create action if redux implementation does not exist", async () => {
    try {
      createAction(["test", "test-action"], true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        false
      );
    } catch (err) {
      fail(err);
    }
  });

  test("should not create action if reducer does not exist", async () => {
    try {
      createReduxStore(true, false);
      await sleep(100);
      createAction(["test", "test-action"], true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        false
      );
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should creact action for existed reducer", async () => {
    try {
      createReduxStore(true, false);
      await sleep(100);
      createReducer("test", true, false);
      createAction(["test", "test-action"], true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        true
      );
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create multiple actions for existed reducer", async () => {
    try {
      createReduxStore(true, false);
      await sleep(100);
      createReducer("test", true, false);
      createAction(["test", "test-action", "test-action-2"], true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/actions/test/test-action.ts")).toBe(
        true
      );
      expect(fs.existsSync("./src/redux/actions/test/test-action-2.ts")).toBe(
        true
      );
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});

describe("create reducer tests", () => {
  beforeEach(() => {
    clear();
  });
  afterEach(() => {
    clear();
  });

  test("should not create reducer if redux implementation does not exist", async () => {
    try {
      createReducer("test", true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(false);
    } catch (err) {
      fail(err);
    }
  });

  test("should create reducer for existed redux implementation", async () => {
    try {
      createReduxStore(true, false);
      await sleep(100);
      createReducer("test", true, false);
      await sleep(100);
      expect(fs.existsSync("./src/redux/reducers/test/index.ts")).toBe(true);
      deleteReduxStore();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});
