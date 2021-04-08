const { Schema, SchemaTypes } = require("mongoose");
const { connection } = require("../connection");

const CommentSchema = new Schema({
  title: String,
  body: String,
  post: {
    type: SchemaTypes.ObjectId,
    ref: "Post",
  },
});

const Comment = connection.model("Comment", CommentSchema);

module.exports = {
  CommentSchema,
  Comment,
};
