import express, { Application, Request, Response, NextFunction, response } from "express";
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import schema from './schema';

const app: Application = express();
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get("/", (req: Request, res: Response, next: NextFunction) => res.send("Hello"));

app.listen(5000, () => console.log("Running a GraphQL API server at http://localhost:5000/graphql"));
