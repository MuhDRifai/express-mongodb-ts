import express from 'express'
import type { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const PORT: number = 4000

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'OK' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
