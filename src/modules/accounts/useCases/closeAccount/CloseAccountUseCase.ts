import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";

@injectable()
class CloseAccountUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string, password: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new AppError("This user does not exists");
    }

    const passwordMatch = await compare(password, userExists.password);

    if (!passwordMatch) {
      throw new AppError("Password is incorrect!");
    }

    this.usersRepository.closeAccount(id);
  }
}

export { CloseAccountUseCase };
