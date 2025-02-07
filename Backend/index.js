const connectToMongo = require("./db");
const express = require('express');
connectToMongo();

const app = express()
const port = 3000

app.use('/api/auth',require('./routes/auth'));
app.use('/api/user',require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})