import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  creator: String,
  name: String,
  interestRate: Number,
  maxLoan: Number,
  minLoan: Number,
  minDownPayment: Number,
  loanTerm: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Post = mongoose.model("post", PostSchema);

export default Post;
