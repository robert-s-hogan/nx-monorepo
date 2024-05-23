// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@with-nx/firebase';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate the input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Add a new document with a generated id
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      return res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error adding document: ', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  // Handle any other HTTP method
  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
