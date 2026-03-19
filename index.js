import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    return res.send('Hello World! this is V2 ' );
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});