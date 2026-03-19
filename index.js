import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT ?? 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get('/', (req, res) => {
    const html = readFileSync(join(__dirname, 'portfolio.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    return res.send(html);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});