import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./connection/Connect.js";
import dotenv from "dotenv";
import chartRoutes from './routes/chart.js';
const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("APP IS RUNNING.");
});


app.use('/api/charts',chartRoutes)



const startServer = async () => {
  try {
    connectDb(
      "mongodb+srv://danish:3042002@cluster0.1yj4uor.mongodb.net/Dashboard?retryWrites=true&w=majority"
    );
    app.listen(8080, () => console.log("Starting server on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
