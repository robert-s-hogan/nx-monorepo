// pages/api/cart.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { ChilloutProducts } from '../../types/types';
import { chilloutProducts } from '../../data/chilloutProducts';
import {
  addItemToServer,
  removeItemFromServer,
  fetchShoppingCart,
} from '../../store/shoppingCartSlice';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await delay(1000);

  if (req.method === 'GET') {
    res.status(200).json(chilloutProducts);
  } else if (req.method === 'POST') {
    const { itemId } = req.body;

    const product = chilloutProducts.results.find((item) => item.id === itemId);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    await addItemToServer({ item: product });

    res.status(200).json(product);
  } else if (req.method === 'PUT') {
    res.status(200).json({ message: 'Not implemented yet' });
  } else if (req.method === 'DELETE') {
    const { itemId } = req.body;

    await removeItemFromServer({ itemId: itemId });

    res.status(200).json({ message: 'Item removed from cart' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
