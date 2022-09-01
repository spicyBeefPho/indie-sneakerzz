export interface Product extends ProductBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
}

export type ProductBody = {
  title: string;
  mainImage: string;
};
