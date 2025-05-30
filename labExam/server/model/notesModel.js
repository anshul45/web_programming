import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  content: String,
  createdAt: Date,
});

export const notesModel = mongoose.model("notes", notesSchema);
