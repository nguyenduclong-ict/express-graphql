const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema: GraphQLSchema, root: rootValue } = require("./graphql/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: GraphQLSchema,
    graphiql: true,
    rootValue,
  })
);

app.listen(3301);
