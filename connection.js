const { createConnection } = require("mongoose");

const connection = createConnection(
  "mongodb+srv://graphqluser:long97@cluster0.b7otg.azure.mongodb.net/graphql?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

connection.on("connected", () => {
  console.log("mongodb connected");
});

module.exports = {
  connection,
};
