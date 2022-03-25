// Necessary for tsyringe
import "reflect-metadata";
import express from "express";

const app = express();

app.use(express.json());

// localhost:3333
// eslint-disable-line no-console
app.listen(3333, () => console.log("Server is running!"));
