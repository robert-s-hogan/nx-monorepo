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
import { DollarSign, Shield, Truck } from '@with-nx/icons';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@with-nx/store/products';

import { RootState, AppDispatch } from '../store';
import { chilloutProducts } from '../data/chilloutProducts';
import ProductOneMain from '../public/images/product1_main.jpg';
import ProductsLandingPlant from '../public/images/products_landing_plant.png';
import ProductOneA from '../public/images/product1_a.jpg';
import ProductOneB from '../public/images/product1_b.jpg';
import ProductOneC from '../public/images/product1_c.jpg';
import RoboMain from '../public/images/robo_main.jpg';
import RoboSideOne from '../public/images/robo_side1.jpg';
import RoboSideTwo from '../public/images/robo_side2.jpg';
import RoboSideThree from '../public/images/robo_side3.jpg';

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
      }, 6000);

      return () => clearTimeout(timeoutId);
    } else if (status === 'succeeded') {
      setIsLoading(false);
    }
  }, [status, dispatch]);

  console.log(`status: ${status}`);

  const initialProduct = {
    id: '',
    main_image: '',
    name: '',
    images: [''],
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
      <Section className="mx-auto lg:flex lg:justify-center pt-32 px-4 lg:pt-44 max-w-screen-2xl">
        <div className="lg:w-1/2">
          <Heading
            level={1}
            className="text-xs lg:text-base uppercase font-bold mb-3 lg:mb-6 text-gray-400"
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
          <Image src={ProductsLandingPlant} alt="" priority />
        </div>
      </Section>
      <Section className="container lg:flex justify-center max-w-screen-2xl mx-auto pt-16 pb-24">
        <div className="mt-6 mx-0 lg:mt-0">
          <Heading
            level={2}
            className="text-xs uppercase mb-2 font-bold text-gray-400"
          >
            Products Available Now
          </Heading>
          {productsToRender.map((product, index) => {
            return (
              <div key={product.id}>
                <Grid className="grid-cols-3 gap-12">
                  <Flex
                    key={product.id}
                    className={`justify-between mb-12 lg:mb-24 col-span-3 gap-16 ${
                      index === 1 ? 'mt-12' : ''
                    }`}
                  >
                    <div className="cursor-pointer">
                      <Image
                        data-product={product.id}
                        className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                        src={product.main_image}
                        alt={product.name}
                        width={400}
                        height={200}
                      />
                      <Grid className="grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                        {product.images.map((image, index) => (
                          <div
                            key={`${image}-${index}}`}
                            className="cursor-pointer h-24"
                          >
                            <Image
                              data-product={product.id}
                              className="h-full w-full object-cover rounded-xl lg:rounded-lg"
                              src={image}
                              alt={product.name}
                              width={400}
                              height={200}
                            />
                          </div>
                        ))}
                      </Grid>
                    </div>
                    <div className="mb-8 lg:mb-10 mt-8 lg:mt-0">
                      <Heading
                        level={2}
                        className="uppercase font-bold text-2xl lg:text-5xl text-gray-700"
                        isLoading={isLoading}
                      >
                        Premium Airconditioner
                      </Heading>
                      <Text
                        isLoading={isLoading}
                        className="uppercase inline-block mt-2 text-xs lg:text-sm font-bold tracking-widest text-gray-500"
                      >
                        By
                        <a
                          className="text-blue-500 hover:underline ml-2"
                          href="/checkout"
                        >
                          Chillout Company
                        </a>
                      </Text>
                      <Flex className="items-center gap-x-6 my-10">
                        <div className="px-3 py-5 rounded-md font-bold bg-blue-50 text-blue-500">
                          <span className="text-2xl">$</span>
                          <span className="text-4xl">{product.price}</span>
                        </div>
                        <Flex className="flex-col">
                          <span className="font-semibold text-xl text-green-500">
                            {product.discount}
                          </span>
                          <span className="text-sm font-medium text-gray-500">
                            {product.taxes}
                          </span>
                        </Flex>
                      </Flex>
                      <Text
                        isLoading={isLoading}
                        className="text-xl max-w-prose font-medium text-gray-600"
                      >
                        {product.description}
                      </Text>
                      <Button
                        isLoading={isLoading}
                        className={`
                            inline-block font-semibold rounded-md uppercase px-10 py-4 mt-12 bg-blue-500 text-blue-50 hover:bg-blue-700 `}
                        // href="/checkout"
                      >
                        add to cart
                      </Button>
                    </div>
                  </Flex>
                </Grid>
              </div>
            );
          })}

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
        </div>
      </Section>
    </ChilloutLayout>
  );
};

export default Products;
