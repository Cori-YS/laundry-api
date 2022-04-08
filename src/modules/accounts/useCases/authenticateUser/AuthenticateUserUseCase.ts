import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // User exists
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password  incorrect!");
    }

    // Password Incorrect
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password is incorrect!");
    }

    // Save Token
    const token = sign({}, "51f0cc41f89738b2c779ae8e61e45adf", {
      subject: user.id,
      expiresIn: "7d",
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
