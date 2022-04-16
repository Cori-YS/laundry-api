interface IUpdateUserDTO {
  id?: string;
  name?: string;
  password?: string;
  email: string;
  address?: string;
  oldPassword?: string;
}

export{ IUpdateUserDTO }