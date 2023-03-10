import { Request, Response, Router } from "express";
import prisma from "../prisma/prisma";

export const menuUrl = "/menu";
const menuRouter = Router();

menuRouter.get("/", async (req: Request, res: Response) => {
  try {
    const menus = await prisma.menu.findMany();

    res.status(200).json({ menus });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

menuRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { name, price, imageUrl } = req.body;

    const menu = await prisma.menu.create({
      data: {
        name,
        price,
        imageUrl,
      },
    });

    res.status(200).json({ menu });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default menuRouter;
