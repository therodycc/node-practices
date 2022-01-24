import express, { Application, urlencoded } from 'express'
import morgan from 'morgan'
import cors from "cors";
import indexRouter from './routes/index.routes';
import weatherRoutes from './routes/weather/weather.routes';
import mongoose from 'mongoose'

class Server {

    public app: Application

    constructor() {
        this.app = express()
        this.config()
        this.routes()
    }

    config() {
        this.app.set('port', process.env.port || 3000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/', indexRouter)
        this.app.use('/weather', weatherRoutes)
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`)
        })
    }
}

const server = new Server();
server.start();