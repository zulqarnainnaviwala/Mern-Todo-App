import express from "express";
import Connection from "./database/dbConfig.js";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/routes.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

//req.body returns json object in backend routes "here: route", which needs to be parse
// app.use(express.json());
// app.use(express.urlencoded({ extended:true }))
//OR ALSO CAN BE DONE BY helper package : body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

dotenv.config();
const connectionURL = process.env.DATABASE_URI;

const port = process.env.PORT;
Connection(connectionURL);

// const PORT = 8000;
app.listen(port, () =>
  console.log(`Your server is running successfully on PORT:${port}`)
);
