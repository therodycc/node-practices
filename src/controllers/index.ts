import { Request, Response } from "express";

class IndexController {
    get(req: Request, res: Response) {
        return res.json({ message: 'Welcome' })
    }
}

const indexController = new IndexController();
export default indexController