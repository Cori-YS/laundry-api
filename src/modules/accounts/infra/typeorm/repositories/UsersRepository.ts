import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  

  async create({
    id,
    name,
    password,
    email,
    address,
    avatar,
    isAdmin,
    isEmployee,
    isActive,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      address,
      avatar,
      isAdmin,
      isEmployee, 
      isActive,
    });

    await this.repository.save(user);
  }

  async update({
    id,
    name,
    password,
    email,
    address
  }: IUpdateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      password,
      email,
      address,
    });

    await this.repository.save(user);
  }
  
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async closeAccount(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
