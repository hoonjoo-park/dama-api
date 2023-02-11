import express from "express";
import menuRouter, { menuUrl } from "./menu";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`🦁 Server is running on ${PORT}`));

app.use(menuUrl, menuRouter);
