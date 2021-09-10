import express from "express";
import mongoose from "mongoose";

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

export const getPost = async (req, res) => {
  const {id} = req.params;

  try {
    const post = await Post.findById(id);

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

export const updatePost = async (req, res) => {
  const {id} = req.params;
  const {
    name,
    interestRate,
    maxLoan,
    minLoan,
    minDownPayment,
    loanTerm,
    creator,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    name,
    interestRate,
    maxLoan,
    minLoan,
    minDownPayment,
    loanTerm,
    creator,
    _id: id,
  };

  await Post.findByIdAndUpdate(id, updatedPost, {new: true});

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Post.findByIdAndRemove(id);

  res.json({message: "Post deleted successfully."});
};

export default router;
