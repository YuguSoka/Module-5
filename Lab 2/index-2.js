const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

