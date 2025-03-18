import { Request, Response } from "express";

export const deleteUser = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const { userId } = req.params;
    // Your delete logic here
    return res.status(200).json({ message: `User ${userId} deleted` });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
