import { ChilloutProducts } from '@with-nx/types';

export const chilloutProducts: ChilloutProducts = {
  total: 2,
  results: [
    {
      id: 1,
      name: 'Premium Air Conditioner',
      description:
        'An advanced and powerful air conditioning system for your home or office',
      main_image:
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_main.jpg',
      images: [
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_a.jpg',
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_b.jpg',
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_c.jpg',
      ],
      price: 1000,
      discount: '20% Off Today',
      taxes: 'Includes all rates and taxes',
      purchase_link: 'https://example.com/purchase/premium-airconditioner',
      quantity: 10,
      time: '2-3 business days',
    },
    {
      id: 2,
      name: 'Ultra Robo-Con',
      description: 'An intelligent and versatile robot for your home or office',
      main_image:
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_main.jpg',
      images: [
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side1.jpg',
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side2.jpg',
        'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side3.jpg',
      ],
      price: 8000,
      discount: '15% Off Today',
      taxes: 'Includes all rates and taxes',
      purchase_link: 'https://example.com/purchase/ultra-robo-con',
      quantity: 5,
      time: '5-7 business days',
    },
  ],
};
