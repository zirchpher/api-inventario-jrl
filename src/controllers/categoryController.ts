import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../config/database';

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await sequelize.query('SELECT * FROM Categories', {
      type: QueryTypes.SELECT,
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving categories', error });
  }
};
