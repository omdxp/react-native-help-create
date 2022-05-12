const {
  createComponent,
  createScreen,
  createReduxStore,
  createNavigation,
} = require("../bin/create");
const {
  deleteComponents,
  deleteScreens,
  deleteReduxStore,
  deleteNavigation,
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
      createComponent("test1", false, true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test1/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test1/styles.ts")).toBe(true);
      deleteComponents(["test1"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component", async () => {
    try {
      createComponent("test2", true, false, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test2/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/components/test2/styles.js")).toBe(true);
      deleteComponents(["test2"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts component in a folder", async () => {
    try {
      createComponent("test3", false, true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test3/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test3/styles.ts")).toBe(
        true
      );
      deleteComponents(["test3"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js component in a folder", async () => {
    try {
      createComponent("test4", true, false, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test4/index.jsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test4/styles.js")).toBe(
        true
      );
      deleteComponents(["test4"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component", async () => {
    try {
      createComponent("test5", false, true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/test5/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/components/test5/styles.ts")).toBe(true);
      deleteComponents(["test5"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed component in a folder", async () => {
    try {
      createComponent("test6", false, true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/components/folder/test6/index.tsx")).toBe(
        true
      );
      expect(fs.existsSync("./src/components/folder/test6/styles.ts")).toBe(
        true
      );
      deleteComponents(["test6"], "folder");
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
      createScreen("test", false, true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.ts")).toBe(true);
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js screen", async () => {
    try {
      createScreen("test", true, false, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.js")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.js")).toBe(true);
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create ts screen in a folder", async () => {
    try {
      createScreen("test", false, true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.ts")
      ).toBe(true);
      deleteScreens(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should create js screen in a folder", async () => {
    try {
      createScreen("test", true, false, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.jsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.js")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.js")
      ).toBe(true);
      deleteScreens(["test"], "folder");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed screen", async () => {
    try {
      createScreen("test", false, true, "", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/test/styles.ts")).toBe(true);
      expect(fs.existsSync("./src/screens/test/functions/index.ts")).toBe(true);
      deleteScreens(["test"], "");
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });

  test("should not create already existed screen in a folder", async () => {
    try {
      createScreen("test", false, true, "folder", "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/folder/test/index.tsx")).toBe(true);
      expect(fs.existsSync("./src/screens/folder/test/styles.ts")).toBe(true);
      expect(
        fs.existsSync("./src/screens/folder/test/functions/index.ts")
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
      createReduxStore(false, true);
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
      createReduxStore(true, false);
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
      createScreen("s1", false, true, "", "", false);
      await sleep(100);
      createScreen("s2", false, true, "", "", false);
      await sleep(100);
      createNavigation(["stack", "s1", "s2"], false, true, "", false);
      await sleep(100);
      expect(fs.existsSync("./src/screens/navigation.tsx")).toBe(true);
      deleteNavigation();
      await sleep(100);
    } catch (err) {
      fail(err);
    }
  });
});
