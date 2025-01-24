import { Request, Response } from 'express';
import { Post } from '../models';

export const  getPostDetail = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        const err = error as Error; // Explicitly type-cast
        res.status(500).json({ error: err.message });
    }
}

export const createPost = async(req: Request, res: Response) => {
    try {
        
    } catch (error) {
        const err = error as Error; // Explicitly type-cast
        res.status(500).json({ error: err.message });
    }
}