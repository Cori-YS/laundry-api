interface ICreateToWashDTO {
  user_id: string;
  clothes_id: string;
  service_id: string;
  expected_return_date: Date;
}

export { ICreateToWashDTO };