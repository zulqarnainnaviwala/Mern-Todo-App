import express from "express";
import Connection from "./database/dbConfig.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

//req.body returns json object in backend routes "here: route", which needs to be parse
// app.use(express.json());
// app.use(express.urlencoded({ extended:true }))
//OR ALSO CAN BE DONE BY helper package : body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const user = process.env.DATABASE_USERNAME;
const pass = process.env.DATABASE_PASSWORD;
const port = process.env.PORT;
Connection(user, pass);

// const PORT = 8000;
app.listen(port, () =>
  console.log(`Your server is running successfully on PORT:${port}`)
);
