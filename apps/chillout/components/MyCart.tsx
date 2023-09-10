import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Flex, Section, Stepper, Text } from '@with-nx/react-ui';
import { FeatherMinus, FeatherPlus, FeatherX } from '@with-nx/icons';
import Image from 'next/image';
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '@with-nx/store/cart';

// import { useAuth } from '@with-nx/auth';
import { chilloutProducts } from '../data/chilloutProducts';

interface MyCartProps {
  onValidationStatusChange?: (isValid: boolean) => void;
  isValid?: boolean;
  formData?: any;
  setFormData?: any;
  cartItems: any;
}

const MyCart = ({
  onValidationStatusChange,
  isValid,
  formData,
  setFormData,
  cartItems,
}: MyCartProps) => {
  const dispatch = useDispatch();
  const products = chilloutProducts.results;

  const [customizableCartItems, setCustomizableCartItems] = useState([]);

  // const licensedItemsData = shoppingCart?.data?.licensedItemsData;
  // const nonLicensedItemsData = shoppingCart?.data?.nonLicensedItemsData;

  // useEffect(() => {
  //   onValidationStatusChange(false);
  // }, []);

  // console.log(`formData from MyCart: `, formData);

  // const handleRemoveItem = async (itemId) => {
  //   try {
  //     await removeItemFromServer(itemId, dispatch);
  //     console.log(`Item removed successfully`, itemId);
  //     fetchCartData();
  //   } catch (error) {
  //     console.error('Error removing item from server:', error);
  //   }
  // };

  // useEffect(() => {
  //   console.log("licensedItemsData", licensedItemsData);
  //   console.log("nonLicensedItemsData", nonLicensedItemsData);
  // }, [licensedItemsData, nonLicensedItemsData]);

  //product type
  // const convertProductTypeToName = (type) => {
  //   switch (type) {
  //     case 'CHOREO_GUIDE':
  //       return 'Choreography';
  //     case 'DIGITAL_DROP':
  //       return 'Digital Backdrops';
  //     case 'SCENIC_PROJECTION_PACKAGE':
  //       return 'Scenic Projections';
  //     default:
  //       return 'Unknown';
  //   }
  // };

  //product title
  // const [title, setTitle] = useState('');
  // const getProductTitle = (product) => {
  //   switch (product.type) {
  //     case 'CHOREO_GUIDE':
  //       return product.choreoGuide?.show?.title || 'Unknown';
  //     case 'DIGITAL_DROP':
  //       return product.digitalDrop?.name || 'Unknown';
  //     case 'SCENIC_PROJECTION_PACKAGE':
  //       return product.scenicProjection?.show?.title || 'Unknown';
  //     default:
  //       return 'Unknown';
  //   }
  // };
  // useEffect(() => {
  //   const fetchTitle = async () => {
  //     if (licensedItemsData && licensedItemsData.length > 0) {
  //       const productTitle = await getProductTitle(licensedItemsData[0]);
  //       setTitle(productTitle);
  //     }
  //   };

  //   fetchTitle();
  // }, [shoppingCart, licensedItemsData]);

  // const handleItemValidationStatusChange = (
  //   index: number,
  //   isValid: boolean
  // ) => {
  //   setCartItems((prevItems) => {
  //     const newItems = { ...prevItems };
  //     newItems[index] = { isValid };
  //     return newItems;
  //   });
  // };

  // useEffect(() => {
  //   const allItemsValid = Object.values(cartItems).every(
  //     (item) => item.isValid
  //   );
  //   onValidationStatusChange(allItemsValid);
  // }, [cartItems, onValidationStatusChange]);
  // const handleUpdateDetails = (
  //   index: number
  //   // details: CustomizableCartItemDetails
  // ) => {
  //   setCustomizableCartItems((prevItems) => {
  //     const newItems = [...prevItems];
  //     newItems[index] = details;
  //     return newItems;
  //   });
  //   // setFormData(customizableCartItems);
  // };
  // const cartItemRefs = useRef([]);
  // const firstCartItemDetails = cartItemRefs.current[0]?.getDetails();

  const [cartItemsState, setCartItemsState] = useState(cartItems);

  useEffect(() => {
    setCartItemsState(cartItems);
  }, [cartItems]);

  const handleRemoveProduct = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity, oldQuantity) => {
    if (newQuantity > oldQuantity) {
      dispatch(increaseProductQuantity(id));
    } else if (newQuantity < oldQuantity) {
      dispatch(decreaseProductQuantity(id));
    }
  };

  return (
    <Section>
      <>
        <Text className="text-xl mb-4">My Cart</Text>
        <div className="mb-8">
          {/* <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
            <span className="text-2xl font-semibold">1</span>
          </div> */}

          <h3 className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400">
            Product Info
          </h3>
        </div>
        <div className="space-y-4">
          {cartItems.map((product) => (
            <div key={product.id} className="card items-center justify-between">
              <Flex className="justify-end w-full h-full">
                <Button
                  className=""
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <FeatherX className="text-gray-400 h-4 w-4 cursor-pointer" />
                </Button>
              </Flex>
              <Flex className="flex-col space-x-4 mb-4">
                <Flex className="space-x-4">
                  <div className="mt-=2" />
                  <Image
                    src={`${product.main_image}`}
                    alt={`${product.name} image`}
                    width={100}
                    height={100}
                  />
                  <Flex className="flex-col">
                    <Text className="text-sm lg:text-xl">{product.name}</Text>
                    <Text className="uppercase text-xs">
                      by <span className="text-primary">Chillout Company</span>
                    </Text>
                    <Flex className="flex-col space-y-4 text-right">
                      <Text className="text-xl pt-2 text-left">
                        ${product.price}
                      </Text>
                      <Stepper
                        value={product.quantity}
                        onValueChange={(newQuantity) =>
                          handleQuantityChange(
                            product.id,
                            newQuantity,
                            product.quantity
                          )
                        }
                        minusIcon={
                          <FeatherMinus className="text-white h-4 w-4" />
                        }
                        plusIcon={
                          <FeatherPlus className="text-white h-4 w-4" />
                        }
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          ))}
        </div>

        <span
          id="success"
          className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-green-500 bg-green-100 text-green-600"
        >
          Thanks! We'll be in touch soon.
        </span>
        <span
          id="error"
          className="hidden absolute mt-2 px-4 py-2 font-medium border rounded-sm border-red-500 bg-red-100 text-red-600"
        >
          Whoops... Something went wrong.
        </span>
      </>
    </Section>
  );
};

export default MyCart;
