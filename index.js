import express from "express";

import app from "./app";
import "./apis/status-codes";
import "./apis/http-methods";
import "./apis/optimization";

app.use(express.json());


const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000)`)
);