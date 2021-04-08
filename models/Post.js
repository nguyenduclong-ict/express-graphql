const { Schema, SchemaTypes } = require("mongoose");
const { connection } = require("../connection");

const PostSchema = new Schema({
  title: String,
  body: String,
  comments: [
    {
      type: SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = connection.model("Post", PostSchema);

module.exports = {
  PostSchema,
  Post,
};
