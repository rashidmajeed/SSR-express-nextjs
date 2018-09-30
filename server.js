const express = require('express');
const next = require('next');
const port = 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        server.get('*', (req, res) => {
            return handler(req, res);
        })

        server.listen(port, (err) => {
            if (err) 
                throw err;
                console.log(`Server ready on http://localhost:${port}`);
        })
    })

