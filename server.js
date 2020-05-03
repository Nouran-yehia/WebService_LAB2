const express = require('express')
const app = express();
const studentRouter = require('./studentrouter')

app.get('/', (req, res) => {
  res.send('Hello')
});

app.use(express.json())
app.use('/student', studentRouter)

app.listen(8000, () => {
  console.log('listening on port 8000!')
});