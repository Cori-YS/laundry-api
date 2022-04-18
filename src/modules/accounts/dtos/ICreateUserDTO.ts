interface ICreateUserDTO {
  id?: string;
  name: string;
  password: string;
  email: string;
  address?: string;
  avatar?: string;
  isAdmin?: boolean;
  isEmployee?: boolean;
  isActive?: boolean;
}

export { ICreateUserDTO };
