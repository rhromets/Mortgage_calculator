import express from "express";

import Post from "../models/Post.js";

const router = express.Router();

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find();

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

export const createPost = async (req, res) => {
  const {
    name,
    interestRate,
    maxLoan,
    minLoan,
    minDownPayment,
    loanTerm,
    creator,
  } = req.body;
  const newPost = new Post({
    name,
    interestRate,
    maxLoan,
    minLoan,
    minDownPayment,
    loanTerm,
    creator,
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};

export default router;
