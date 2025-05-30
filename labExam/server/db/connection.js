import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/NotesHub")
  .then(() => console.log("Db Connected!"))
  .catch((err) => console.log(err));
