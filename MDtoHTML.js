import { stream } from "unified-stream";
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

process.stdin.pipe(stream(processor)).pipe(process.stdout);

//TO CREATE THE HTML FILE:
//in terminal, run this command: node FILE.js < FILE.md > FILE.html
//for this example: node MDtoHTML.js < example.md > example.html

//remark-parse is a markdown parser
//rehype-stringify is an HTML stringifier
//remark-rehype is a transformer to transform between MD and HTML
//rehype-slug remark-toc rehype-document give more HTML document structure to the file
