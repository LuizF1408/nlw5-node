import { Router} from "express"
import { MessagesController } from "./src/controllers/MessagesController";
import { SettingsController } from "./src/controllers/SettingsController";
import { UsersController } from "./src/controllers/UserController";


const routes = Router();

const settingsController = new SettingsController()
const usersController = new UsersController()
const messagesController = new MessagesController()

routes.post('/settings',settingsController.create);

routes.post('/users',usersController.create);

routes.post('/message',messagesController.create);

routes.get('/message/:id',messagesController.showByUser);

export {routes};