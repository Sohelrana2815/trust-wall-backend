import express, {
  type Application,
  type Request,
  type Response,
} from "express";

const app: Application = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
  console.log("Hello with pnpm and Typescript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
