import { Request, Response } from 'express';
import { User } from '../models';

export const getUsers = async (req: Request, res: Response) => {
  try {
    console.log("helo")
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    const err = error as Error; // Explicitly type-cast
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    const err = error as Error; // Explicitly type-cast
    res.status(500).json({ error: err.message });
  }
};
