const express = require('express');
const app = express();

app.use(express.static('assets'))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(90, () => console.log('Node server is listening on port 90'))
