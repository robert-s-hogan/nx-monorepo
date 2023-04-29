import { Box } from 'simple-effing-primitive-layout';

// import {
//   CustomizableCartItem,
//   CustomizableCartItemDetails,
// } from '@with-nx/simple-ui/organisms';
// import { Rule } from '@with-nx/simple-ui/atoms';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromServer } from '../store/shoppingCartSlice';
import { AppDispatch } from '../store/store';
import { Text } from '@with-nx/react-ui';

import useShoppingCart from '../hooks/useShoppingCart';
import ReusableSection from './ReusableSection';
// import { useAuth } from '@with-nx/auth';
import { CheckoutPageFormData } from '../pages/checkout';

interface MyCartProps {
  onValidationStatusChange: (isValid: boolean) => void;
  isValid?: boolean;
  formData: CheckoutPageFormData;
  setFormData: (data: CheckoutPageFormData) => void;
  onCreateProduction: (productionData: any) => void;
}

const MyCart = ({
  onValidationStatusChange,
  isValid,
  formData,
  setFormData,
  onCreateProduction,
}: MyCartProps) => {
  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState<
    Record<number, { isValid: boolean }>
  >({});
  const [customizableCartItems, setCustomizableCartItems] = useState([]);

  const { shoppingCart, fetchCartData, shoppingCartQuantity } =
    useShoppingCart();

  // const licensedItemsData = shoppingCart?.data?.licensedItemsData;
  // const nonLicensedItemsData = shoppingCart?.data?.nonLicensedItemsData;

  useEffect(() => {
    onValidationStatusChange(false);
  }, []);

  console.log(`formData from MyCart: `, formData);

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
  return (
    <ReusableSection>
      <Text>
        My Cart {shoppingCartQuantity ? `(${shoppingCartQuantity})` : ''}
      </Text>

      <Box parse="d:flex a:center mt:12 mb:12">
        <Box parse="d:inline-flex">
          <Text className="uppercase">Product Info</Text>
        </Box>
        <Box parse="f:1 h:1 c:?foreground" />
      </Box>

      <div className="mt-16 lg:mt-0">
        <div className="mb-12">
          <div className="flex w-8 h-8 rounded-full justify-center items-center border-2 text-blue-500 border-blue-500">
            <span className="text-2xl font-semibold">1</span>
          </div>

          <h3 className="uppercase tracking-wider text-xs font-semibold mt-2 text-gray-400">
            Product Info
          </h3>
        </div>
        <div className="flex justify-between mx-12 lg:mx-8 mb-4">
          <span className="text-sm font-semibold mr-4 text-gray-600">Type</span>
          <select name="type" id="type">
            <option>Airconditioner</option>
            <option>Ultra Robo-Con</option>
          </select>
        </div>
        <div className="flex justify-between mx-12 lg:mx-8 mb-4">
          <span className="text-sm font-semibold mr-4 text-gray-600">
            Quantity
          </span>
          <select name="quantity" id="quantity">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <textarea
            className="not_required border-0 w-full bg-gray-100"
            name="comment"
            placeholder="Additional comments..."
            id="comment"
            cols={30}
            rows={3}
            minLength={10}
            maxLength={100}
          ></textarea>
        </div>
        <button
          type="submit"
          id="submit-button"
          className="w-full uppercase text-center px-5 py-3 shadow-sm my-4 lg:mb-0 rounded-md font-semibold bg-blue-500 border text-blue-50  hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
        >
          Place Order
        </button>
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
      </div>
    </ReusableSection>
  );
};

export default MyCart;
