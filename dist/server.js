import { createServer } from 'http';
import fs from 'fs';
// import { mainContent } from './content.js';
const port = 3009;
const jobs = fs.readFileSync('./src/data/jobs.json', 'utf8');
createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.write(jobs);
    res.end();
}).listen(port);
console.log(`listening on http://localhost:${port}`);
//# sourceMappingURL=server.js.map