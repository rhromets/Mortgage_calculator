import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  interestRate: Number,
  maxLoan: Number,
  minLoan: Number,
  minDownPayment: Number,
  loanTerm: Number,
  creator: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
