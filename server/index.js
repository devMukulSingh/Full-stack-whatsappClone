import express from "express";
import dotenv from "dotenv";
import db from "./database/db.js";
import Route from "./routes/route.js";
import bodyParser from "body-parser";
import cors from "cors"
/////////////////////////////////////////
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT , () => {
    console.log(` app is running at PORT ${PORT}`);
})
db();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded ({encoded:false}));
app.use('/',Route);

export default app;