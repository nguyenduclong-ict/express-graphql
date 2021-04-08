const { buildSchema } = require("graphql");
const { Post, Comment } = require("../models");

var schema = buildSchema(`
  type Post {
    title : String
    body: String
    comments: [Comment]
  }

  type Comment {
    title: String
    body: String
    post: Post
  }

  type Query {
    name : String
    post(id: String): Post
    posts: [Post]
    comments: [Comment]
  }
`);

const root = {
  name: () => {
    return "Nguyễn Đức Long";
  },
  post: ({ id }) => {
    return Post.findById(id).populate("comments");
  },
  posts: ({ title, content }) => {
    const query = {};
    if (title) query.title = title;
    if (content) query.content = content;
    return Post.find(query).populate("comments");
  },
  comments: () => {
    return Comment.find();
  },
};

module.exports = {
  schema,
  root,
};
