// The Worst Pizza Topping — entry program (Node.js stdlib only).
// Writes one funny line pitching a terrible pizza topping to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Our newest topping: a single wet sock, toasted just enough to be legally food, served on your pizza with a straight face and no refund.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
