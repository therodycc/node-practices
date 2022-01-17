import { Request, Response } from "express";

class WeatherController {
    get(req: Request, res: Response) {
        return res.json({ message: 'Welcome to the weather' })
    }
}

const weatherController = new WeatherController();
export default weatherController