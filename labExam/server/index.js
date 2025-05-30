import express from "express";
import cors from "cors";
import "./db/connection.js";
import { notesModel } from "./model/notesModel.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.get("/notes", async (req, res) => {
  try {
    const resp = await notesModel.find();
    res.send(resp);
  } catch (error) {
    res.status(403).send("Failed to get notes");
  }
});
app.post("/notes", async (req, res) => {
  try {
    req.body.createdAt = new Date();
    const model = new notesModel(req.body);
    await model.save();
    res.status(201).send("Note Added Sucessfully");
  } catch (error) {
    res.status(403).send("Failed to add Note");
  }
});
app.delete("/notes/:id", async (req, res) => {
  try {
    await notesModel.findByIdAndDelete(req.params.id);
    res.send("Notes Deleted Sucessfully");
  } catch (error) {
    res.status(403).send("Failed to delete notes");
  }
});

const port = 3001;

app.listen(port, () => console.log("Server is listening on port " + port));
