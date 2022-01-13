//This example uses file-system (to-vfile written on top of Node FS)
//vfile is a small and browser friendly virtual file format that tracks metadata (such as a file’s path and value) and messages.

import { readSync, writeSync } from "to-vfile"; //
import { reporter } from "vfile-reporter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkToc from "remark-toc";
import rehypeDocument from "rehype-document";

const processor = unified()
  .use(remarkParse) //parse markdown
  .use(remarkToc) //format table of contents
  .use(remarkRehype) //transform to HTML
  .use(rehypeDocument, { title: "Contents" }) //Add HTML document elements
  .use(rehypeStringify); //stringify

processor.process(readSync("example.md")).then(
  (file) => {
    console.error(reporter(file));
    file.extname = ".html";
    writeSync(file);
  },
  (error) => {
    throw error;
  }
);
