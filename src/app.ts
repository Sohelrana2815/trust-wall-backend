import express, {
  type Application,
  type Request,
  type Response,
} from "express";

const app: Application = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("Hello with pnpm and Typescript!");
  res.send({
    message: "Trust Wall API is running smoothly!",
  });
});

app.get("/api", (req: Request, res: Response) => {
  res.send("I can do this all day💪");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

export default app;
