import React, { createContext, FC, useContext, useState } from 'react';
import { ICartItem, useCart } from './CartContext';
import { IShippingProvider } from '../shippigProvider';


interface ICustomer {
    firstName: string,
    lastName: string,
    email: string,
    number: number,
    address: string,
    zipcode: string,
    city: string,
    country: string
}

interface IOrderData {
    boughtItems: ICartItem[],
    customer: ICustomer,
    paymentMethod: string,
    shippingMethod: string
}

interface IOrderContextValue {
    order: IOrderData,
    generateOrderId: () => number,
    createNewOrder: (customerInfo: ICustomer) => void,
    DHL: boolean,
    card: boolean,
    invoice: boolean

}

const OrderContext = createContext<IOrderContextValue>({
    order: {
        boughtItems: [],
        customer: {
            firstName: '',
            lastName: '',
            email: '',
            number: 0,
            address: '',
            zipcode: '',
            city: '',
            country: ''
        },
        paymentMethod: '',
        shippingMethod: ''
    },
    generateOrderId: () => 0,
    createNewOrder: () => {},
    swish: false,
    card: false,
    invoice: false,
})

export function useOrderContext() {
    return useContext(OrderContext);
}

export const OrderContextProvider: FC = (props) => {
    const { cart, shipping } = useCart();

    const [swish, setSwish] = useState(false);
    const [card, setCard] = useState(false);
    const [invoice, setInvoice] = useState(false);

    const [order, setOrder] = useState<IOrderData>({
        boughtItems: [],
        customer: {
            firstName: '',
            lastName: '',
            email: '',
            number: 0,
            address: '',
            zipcode: '',
            city: '',
            country: ''
        },
        paymentMethod: '',
        shippingMethod: ''
    });

    const generateOrderId = () => {
        const maxNumber = 100000;
        const orderId = Math.floor(Math.random() * maxNumber + 1);
        return (orderId)
    }

    const createNewOrder = (customerInfo: ICustomer) => {
        console.log(customerInfo);
        const boughtItems = [...cart];
         const customer: ICustomer = {
             firstName: customerInfo.firstName,
             lastName: customerInfo.lastName,
             email: customerInfo.email,
             number: customerInfo.number,
             address: customerInfo.address,
             zipcode: customerInfo.zipcode,
             city: customerInfo.city,
             country: customerInfo.country
         };
         let updatedOrder: IOrderData = {
                 boughtItems: boughtItems,
                 customer: customer,
                 paymentMethod: '',
                 shippingMethod: '',
         }
         setOrder(updatedOrder);
         console.log(updatedOrder);
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                generateOrderId,
                createNewOrder,
                swish,
                card,
                invoice
            }}>
                {props.children}
        </OrderContext.Provider>
    )
}
