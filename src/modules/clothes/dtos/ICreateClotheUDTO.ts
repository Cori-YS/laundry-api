interface ICreateClotheUDTO {
  id?: string;
  user_id?: string;
  name: string;
  description: string;
  color_id?: string;
  fabric_id?: string;
  category_id?: string;
  size_id?: string;
  iron: boolean;
  image?: string;
}

export { ICreateClotheUDTO };
