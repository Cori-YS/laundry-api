import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
}

@injectable()
class UpdateUserEmployeeUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user.id) {
      throw new AppError("User not exists!");
    }

    user.isEmployee = true;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserEmployeeUseCase }
