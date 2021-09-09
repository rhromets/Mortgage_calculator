import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import mongouri from "./config/keys.js";

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

// DB Config
// const db = mongouri.mongoURI;
const db =
  "mongodb+srv://roman:h62qxPTjoMMIzNDp@cluster0.ffium.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
