import { Router, Request, Response } from "express";
import ScrollData, { IScrollData } from "../models/ScrollData";

const router = Router();

// Add scroll data
router.post("/add", async (req: Request, res: Response) => {
  try {
    const { userId, scrollPercent, stage }: { userId: string; scrollPercent: number; stage: number } = req.body;

    const scroll: IScrollData = new ScrollData({ userId, scrollPercent, stage });
    await scroll.save();

    res.status(201).json({ message: "Scroll data saved" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Get scroll data by user
router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const data: IScrollData[] = await ScrollData.find({ userId: req.params.userId });
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
