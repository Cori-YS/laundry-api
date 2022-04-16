import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcrypt";
import { AppError } from "@shared/errors/AppError";
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";


@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository 
  ) {}

  async execute({
    id,
    name,
    password,
    email,
    address,
    oldPassword,
  }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user.id) {
      throw new AppError("User not exists!");
    }

    if (email !== user.email) {
      const EmailAlreadyExists = await this.usersRepository.findByEmail(email);
      if (EmailAlreadyExists) {
      throw new AppError("Email already exists");
      }
    }

    const passwordMatch = await compare(oldPassword, user.password);

    if (!passwordMatch) {
      throw new AppError("Password does not match!");
    }

    const passwordHash = await hash(password, 8);

      user.name = name ? name : user.name,
      user.password = passwordHash ? passwordHash : user.password,
      user.email = email ? email : user.email,
      user.address = address ? address : user.address,

    await this.usersRepository.update(user);
  }
}

export { UpdateUserUseCase };
