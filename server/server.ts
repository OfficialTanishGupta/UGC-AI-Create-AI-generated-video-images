import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const Port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
