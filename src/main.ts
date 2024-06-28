import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import usersRoute from './routes/users'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/',(req:Request, res:Response) => {
  res.send('Hello from Backend API')
})

app.use('/api/users', usersRoute)

app.listen(9001, () => console.log("Api listen on port 9001"))