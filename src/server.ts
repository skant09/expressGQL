import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => res.send("Hello"));

app.listen(5000, () => console.log("listening here on 5000"));
