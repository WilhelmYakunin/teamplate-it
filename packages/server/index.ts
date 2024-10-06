import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

import express from 'express'
import { createClientAndConnect } from './db'

import buffer from './createTemplate'

const app = express()
app.use(cors())
const port = Number(process.env.SERVER_PORT) || 3001

createClientAndConnect()

app.get('/', (_, res) => {
  res.json('👋 Howdy from the server :)')
})

app.get('/createTemplate', async (_err, res) => {
  console.log('reach')
  const doc = await buffer({
    NAME: 'John',
    INN: 'Appleseed',
  })
  res.json(doc)
})

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})
