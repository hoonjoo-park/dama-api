import express from "express";
import morgan from "morgan";
import menuRouter, { menuUrl } from "./menu";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🦁 Server is running on ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

app.use(menuUrl, menuRouter);
