import React, { createContext, FC, useContext, useState } from "react";
import { ICartItem, useCart } from "./CartContext";
import { IShippingProvider } from "../shippigProvider";
import { useLocalStorageState } from "../hooks/useLocalStorage";

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  number: number;
  address: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface IOrderData {
  boughtItems: ICartItem[];
  customer: ICustomer;
  paymentMethod: string;
  shippingMethod: string;
  shippingPrice: number;
  orderId: number;
}

interface IOrderContextValue {
  order: IOrderData;
  generateOrderId: () => number;
  createNewOrder: (customerInfo: ICustomer) => void;
  setShippingMethod: (shippingInfo: string) => any;
  setPaymentMethod: (paymentInfo: string) => any;
  // emptyOrder: () => void,
}

const OrderContext = createContext<IOrderContextValue>({
  order: {
    boughtItems: [],
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      number: 0,
      address: "",
      zipcode: "",
      city: "",
      country: "",
    },
    paymentMethod: "",
    shippingMethod: "",
    shippingPrice: 111,
    orderId: 0,
  },
  generateOrderId: () => 0,
  createNewOrder: () => {},
  setShippingMethod: () => "",
  setPaymentMethod: () => "",
  // emptyOrder: () => ''
});

export function useOrderContext() {
  return useContext(OrderContext);
}
// useLocalStorageState<IOrderData>
export const OrderContextProvider: FC = (props) => {
  const { cart } = useCart();
  const [order, setOrder] = useLocalStorageState<IOrderData>(
    {
      boughtItems: [],
      customer: {
        firstName: "",
        lastName: "",
        email: "",
        number: 0,
        address: "",
        zipcode: "",
        city: "",
        country: "",
      },
      paymentMethod: "",
      shippingMethod: "",
      shippingPrice: 2221,
      orderId: 0,
    },
    "order"
  );

  const setShippingMethod = (shippingInfo: string) => {
    let price = 0;
    switch (shippingInfo) {
      case "DHL":
        price = 149;
        console.log("är i dhl");
        break;
      case "Postnord":
        price = 59;
        console.log("är i postnord");
        break;
      case "Flaskpost":
        price = 0;
        console.log("är i flaskpost");
        break;
    }
    setOrder({ ...order, shippingPrice: price, shippingMethod: shippingInfo });
    console.log(order.shippingMethod);
    console.log(order.shippingPrice);
    return;
  };

  const setPaymentMethod = (paymentInfo: string) => {
    setOrder({ ...order, paymentMethod: paymentInfo });
  };

  const generateOrderId = () => {
    const maxNumber = 100000;
    const orderId = Math.floor(Math.random() * maxNumber + 1);
    console.log(orderId);
    return orderId;
  };

  const createNewOrder = (customerInfo: ICustomer) => {
    const orderID = generateOrderId();
    const boughtItems = [...cart];
    const customer: ICustomer = {
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      email: customerInfo.email,
      number: customerInfo.number,
      address: customerInfo.address,
      zipcode: customerInfo.zipcode,
      city: customerInfo.city,
      country: customerInfo.country,
    };
    let updatedOrder: IOrderData = {
      boughtItems: boughtItems,
      customer: customer,
      paymentMethod: order.paymentMethod,
      shippingMethod: order.shippingMethod,
      shippingPrice: order.shippingPrice,
      orderId: orderID,
    };
    setOrder(updatedOrder);
  };

  // const emptyOrder = () => setOrder({
  //     ...order,
  //     boughtItems: [],
  //     customer: {
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //         number: 0,
  //         address: '',
  //         zipcode: '',
  //         city: '',
  //         country: ''
  //     },
  //     paymentMethod: '',
  //     shippingMethod: '',
  //     shippingPrice: 666,
  //     orderId: 0
  // })

  return (
    <OrderContext.Provider
      value={{
        order,
        generateOrderId,
        createNewOrder,
        setShippingMethod,
        setPaymentMethod,
        // emptyOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};
