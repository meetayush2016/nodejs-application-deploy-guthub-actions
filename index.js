import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
    return res.send('Hello World! this is V2-second-third aja beta ajaa' );
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});