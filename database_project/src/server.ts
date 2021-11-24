import express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.json({hello: 'world'})
});

export const startServer = async () =>{
    app.listen(8080);
    console.log(`Server started at http://localhost:${8080}`);
    console.log(`Press Ctrl+C to quit`);
};
