import express, { Application, Request, Response, NextFunction, response } from "express";
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import schema from './schema';
import fetch from 'node-fetch';

const app: Application = express();
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const fetchItem = (id: number) => fetch(`https://devapi.zivame.com/api/v2/productvm/${id}`)
  .then(response => response.json()).then(response => response.data.summary)

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  context: {
    fetchItem
  },
  graphiql: true,
}));

app.get("/", (req: Request, res: Response, next: NextFunction) => res.send("Hello"));

app.listen(5000, () => console.log("Running a GraphQL API server at http://localhost:5000/graphql"));
