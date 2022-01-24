import { Router } from "express"
import indexController from "../controllers";

class IndexRouter {
    public router: Router = Router()
    constructor(){
        this.config()
    }
    config(){
        this.router.get('/', indexController.get)
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router