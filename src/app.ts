import express, { Application, Request, Response } from "express";
const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Trust Wall API is running smoothly!!!",
  });
});

app.get("/api", (req: Request, res: Response) => {
  res.send("I can do this all day💪");
});

export default app;
