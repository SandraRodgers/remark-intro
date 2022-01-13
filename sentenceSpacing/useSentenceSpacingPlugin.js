//Uses a plugin to search text for extra whitespace
//Relies on retext for parsing natural language

import fs from "fs";
import { retext } from "retext";
import { reporter } from "vfile-reporter";
import retextSentenceSpacing from "../plugins/retextSentenceSpacing.js";

const buffer = fs.readFileSync("sentenceSpacing.md");

retext()
  .use(retextSentenceSpacing) //plugin
  .process(buffer)
  .then((file) => {
    console.error(reporter(file));
  });

//run with command: node useSentenceSpacingPlugin.js
