import ChilloutLayout from '../components/ChilloutLayout';
import {
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Section,
  Skeleton,
  Spinner,
} from '@with-nx/react-ui';
import { Check, DollarSign, Shield, Truck } from '@with-nx/icons';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@with-nx/store/products';
import { addProductToCart } from '@with-nx/store/cart';
import { NextjsImage } from '@with-nx/nextjs-react-ui';
import { Product } from '@with-nx/types';

import { RootState, AppDispatch } from '../store';
import { chilloutProducts } from '../data/chilloutProducts';

import ProductsLandingPlant from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/products_landing_plant.png';
import ProductOneA from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_a.jpg';
import ProductOneB from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_b.jpg';
import ProductOneC from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/product1_c.jpg';
import RoboMain from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_main.jpg';
import RoboSideOne from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side1.jpg';
import RoboSideTwo from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side2.jpg';
import RoboSideThree from 'https://cloudflare-assets-nx-monorepo.vercel.app/chillout/robo_side3.jpg';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.products.data.results
  );
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (status === 'idle') {
      setIsLoading(true);
      const timeoutId = setTimeout(() => {
        dispatch(fetchProducts('/api/products'));
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else if (status === 'succeeded') {
      setIsLoading(false);
    }
  }, [status, dispatch]);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isInCart = (product: Product) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const initialProduct = {
    id: '',
    main_image: '',
    name: '',
    images: ['', '', ''],
    price: '',
    discount: '',
    taxes: '',
    description: '',
  };

  const productsToRender = isLoading
    ? Array(2)
        .fill(initialProduct)
        .map((product, index) => ({ ...product, id: `loading-${index}` }))
    : products;

  return (
    <ChilloutLayout>
      <Section className="mx-auto lg:flex lg:justify-center pt-32 px-4">
        <div className="lg:w-1/2">
          <Heading
            level={1}
            className="text-xs lg:text-base uppercase font-bold mb-3 text-gray-400"
          >
            Products
          </Heading>
          <Text className="font-semibold text-3xl lg:text-5xl max-w-prose text-gray-700">
            Something really catchy and not too long. Short and sweet does it.
          </Text>
          <div className="pl-4 mt-12 lg:pl-20 lg:mt-24">
            <Flex className="items-center mb-10">
              <Flex className="justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <Truck className="text-white" />
              </Flex>
              <div>
                <Text className="text-lg font-semibold text-gray-700">
                  Free Delivery
                </Text>
                <Text className="text-sm font-medium text-gray-500">
                  A phrase about speed and efficiency.
                </Text>
              </div>
            </Flex>

            <Flex className="items-center mb-10">
              <Flex className="justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <DollarSign className="w-8 h-8 text-white" />
              </Flex>
              <div>
                <Text className="text-lg font-semibold text-gray-700">
                  Money Guarantee
                </Text>
                <Text className="text-sm font-medium text-gray-500">
                  Something involving money.
                </Text>
              </div>
            </Flex>

            <Flex className="items-center mb-10">
              <Flex className="justify-center items-center w-12 h-12 mr-6 rounded-md bg-blue-600">
                <Shield className="text-white w-8 h-8" />
              </Flex>
              <div>
                <Text className="text-lg font-semibold text-gray-700">
                  Time Promise
                </Text>
                <Text className="text-sm font-medium text-gray-500">
                  A commitment to time and it’s weirdness.
                </Text>
              </div>
            </Flex>
          </div>
        </div>
        <div className="absolute lg:relative bottom-20 opacity-10 lg:opacity-100">
          <Image
            src="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/products_landing_plant.png"
            width={400}
            height={400}
            alt=""
            priority
          />
        </div>
      </Section>
      <Section className="container justify-center mx-auto pb-32 max-w-full xl:px-32">
        <Heading
          level={2}
          className="text-xs uppercase mb-2 font-bold text-gray-400"
        >
          Products Available Now
        </Heading>
        <Grid className="grid-cols-1 gap-12 xl:grid-cols-2">
          {productsToRender.map((product, index) => {
            const productInCart = isInCart(product);

            return (
              <Grid
                className="grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-1 lg:gap-8"
                key={product.id}
              >
                <Flex className={`${index === 1 ? '' : ''}`}>
                  <div className="w-full h-auto">
                    <Image
                      data-product={product.id}
                      className="rounded-xl lg:rounded-lg"
                      src={product.main_image}
                      width={500}
                      height={500}
                      objectFit="cover"
                      alt={product.name}
                      // isLoading={isLoading}
                    />
                    <Grid className="grid-cols-3 gap-4 mt-4">
                      {product.images.map((image, index) => (
                        <div
                          key={`${image}-${index}}`}
                          className="w-full h-auto"
                        >
                          <Image
                            data-product={product.id}
                            className="object-cover rounded-xl lg:rounded-lg"
                            src={image}
                            width={250}
                            height={250}
                            objectFit="cover"
                            alt={product.name}
                            // isLoading={isLoading}
                          />
                        </div>
                      ))}
                    </Grid>
                  </div>
                </Flex>
                <Flex className="col-span-1 h-full w-full">
                  <div className="mb-8 lg:mb-10 xl:mb-0 md:mt-6 lg:mt-0 w-full">
                    <Heading
                      level={2}
                      className="uppercase font-bold text-2xl lg:text-3xl text-gray-700"
                      isLoading={isLoading}
                      height={48}
                    >
                      Premium Air Conditioner
                    </Heading>
                    <Text
                      isLoading={isLoading}
                      width={175}
                      className="uppercase inline-block mt-2 xl:mt-0 text-xs lg:text-sm xl:text-xs font-bold tracking-widest text-gray-500"
                    >
                      By
                      <a
                        className="text-blue-500 hover:underline ml-2"
                        href="/checkout"
                      >
                        Chillout Company
                      </a>
                    </Text>
                    <Text
                      isLoading={isLoading}
                      className="text-xl md:text-base lx:text-lg xl:text-sm max-w-prose font-medium text-gray-600"
                    >
                      {product.description}
                    </Text>
                    <Flex className="items-center gap-x-6 mt-4 xl:mt-2 lg:gap-x-1 lg:flex-col">
                      <div className="py-5 md:py-0 rounded-md font-bold bg-blue-50 text-blue-500 lg:w-full">
                        <Text
                          className="text-5xl md:text-3xl xl:text-2xl"
                          isLoading={isLoading}
                          width={100}
                        >
                          <span className="text-2xl xl:text-xl">$</span>
                          {product.price}
                        </Text>
                      </div>
                      <Flex className="flex-col lg:w-full">
                        <Text
                          className="font-semibold text-2xl xl:text-lg text-green-500"
                          isLoading={isLoading}
                          width={150}
                        >
                          {product.discount}
                        </Text>
                        <Text className="text-xs font-medium text-gray-500">
                          {product.taxes}
                        </Text>
                      </Flex>
                    </Flex>
                    <div className="mt-6 md:mt-4" />
                    <Button
                      className={`inline-block font-semibold rounded-md uppercase px-8 py-3 ${
                        productInCart ? 'bg-green-500' : 'bg-blue-500'
                      } text-blue-50 hover:bg-blue-700 md:py-4`}
                      // href="/checkout"
                      onClick={() => {
                        const productWithQuantity = { ...product, quantity: 1 };
                        dispatch(addProductToCart(productWithQuantity));
                      }}
                      isLoading={isLoading}
                      width={150}
                      height={56}
                    >
                      {productInCart ? (
                        <Flex className="items-center space-x-4">
                          Added to Cart <Check className="h-6 w-6 text-white" />
                        </Flex>
                      ) : (
                        'Add to Cart'
                      )}
                    </Button>
                  </div>
                </Flex>
              </Grid>
            );
          })}
        </Grid>

        {/* <Flex className="flex-col w-full space-y-4 border-2 border-primary p-6 rounded shadow-xl">
              <Heading level={2} className="mb-8">
                Oh no!
              </Heading>
              <Text>
                It looks like there's a hiccup with loading your shopping cart.
              </Text>
              <Text>
                Please refresh the page or try again a bit later. We're sorry
                for any inconvenience caused.
              </Text>
            </Flex> */}
      </Section>
    </ChilloutLayout>
  );
};

export default Products;
