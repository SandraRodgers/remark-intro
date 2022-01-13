import { stream } from "unified-stream";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify);

process.stdin.pipe(stream(processor)).pipe(process.stdout);

//TO CREATE THE HTML FILE:
//in terminal, run this command: node FILE.js < FILE.md > FILE.html
//for this example: node MDtoHTML.js < example.md > example.html
