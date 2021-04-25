import express from "express";
import "./src/database";
import {routes} from "./routes";


const app = express();
app.use(express.json())

app.use(routes);


app.listen(3000, ()=> console.log("Server Online port 3000"))