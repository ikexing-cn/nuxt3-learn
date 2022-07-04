import { log } from 'console'
import express from 'express'

const app = express()
const port = 4000

// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use(require('cors')())

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Great Get success!',
    code: 200,
  })
})

app.post('/', (req, res) => {
  res.status(200).send({
    message: 'Great Post success!',
    code: 200,
  })
})

app.put('/', (req, res) => {
  res.status(200).send({
    message: 'Great Put success!',
    code: 200,
  })
})

app.delete('/', (req, res) => {
  res.status(200).send({
    message: 'Great Delete success!',
    code: 200,
  })
})

app.listen(port, () => {
  log(`Server is running on port ${port}`)
})
