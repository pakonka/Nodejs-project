import express, { Express, Request, Response } from "express";
const app: Express = express();

const PORT = process.env.PORT || 9000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Express + TypeScript Server" });
});

export default app;
