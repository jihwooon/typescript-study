import express, { NextFunction, RequestHandler, Response } from 'express'

// express => Application
const app = express();
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/foo', (req, res, next) => {
  res.send('bar')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
