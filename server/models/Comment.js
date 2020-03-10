const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    writer: { type: Schema.Types.ObjectId, ref: "User" },
    plan: { type: Schema.Types.ObjectId, ref: "Plan" },
    title: String,
    comment: String
  },
  {
    timestamps: true
  }
);

const Comment = mongoose.model("Comment", userSchema);
module.exports = Comment;