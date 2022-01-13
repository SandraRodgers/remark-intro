import { readFileSync, existsSync,mkdirSync, writeFileSync  } from 'fs';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const contents = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .processSync(readFileSync(`${process.cwd()}/example.md`))
  
  const outputDir = `${process.cwd()}/public`;

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir);
  }
 
  writeFileSync(`${outputDir}/home.html`, String(contents));
  

console.log(contents.value);

//run command: node MDtoHTMLwithFS.js