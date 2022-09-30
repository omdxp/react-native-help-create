const fs = require("fs");

const p = JSON.parse(fs.readFileSync("./package.json", "utf8"));

p.name = `@omdxp/${p.name}`;

fs.writeFileSync("./package.json", JSON.stringify(p, null, 2));
