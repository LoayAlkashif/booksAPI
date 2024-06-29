import express from "express";
import { dbConn } from "./database/dbConnection.js";
import bookRouter from "./src/modules/Book/book.route.js";
import authorRouter from "./src/modules/author/author.route.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
