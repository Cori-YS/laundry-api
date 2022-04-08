import { Request, Response, NextFunction } from "express";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

export async function ensureEmployee(
  request: Request, 
  response: Response, 
  next: NextFunction
  ) {
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user.isEmployee) {
      throw new AppError("User isn't Employee");
    }

    return next();
  }