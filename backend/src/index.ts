import express from 'express'
import authRouter from './routes/auth.route.js'

const app = express()

app.use("/api/auth" , authRouter)

app.listen(5000 , ()=>{
    console.log('Server is running on port 5000')
})