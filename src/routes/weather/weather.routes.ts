import { Router } from "express"
import weatherController from "../../controllers/weather/weather.controller";


class WeatherRouter {
    public router: Router = Router()
    constructor(){
        this.config()
    }
    config(){
        this.router.get('/', weatherController.get)
        
    }
}

const weatherRouter = new WeatherRouter();
export default weatherRouter.router