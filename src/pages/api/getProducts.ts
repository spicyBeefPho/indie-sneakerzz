import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";
import { Product } from "../../../typings";
import { groq } from "next-sanity";

const productQuery = groq`
*[_type == "product"]{
    _id, title, mainImage
  }
`;

type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: Product[] = await sanityClient.fetch(productQuery);
  console.log(products);
  res.status(200).json({ products });
}
