import React, { createContext, FC, useContext, useState } from 'react';
import { IShippingProvider } from '../shippigProvider';
import { ICartItem, useCart } from './CartContext'

interface ICustomer {
    fullName: string,
    email: string,
    phoneNumer: number,
    address: string,
}

interface IOrderData {
    boughtItems: ICartItem[],
    customer: ICustomer,
    paymentMethod: string,
    shippingMethod: IShippingProvider;

}

interface IOrderContextValue {
    order: IOrderData[],
    generateOrderId: () => string,
    createNewOrder: (customerInfo: ICustomer) => void,
}

const OrderContext = createContext<IOrderContextValue>({
    order: [],
    generateOrderId: () => '',
    createNewOrder: () => {},
})

export function useOrderContext() {
    return useContext(OrderContext);
}

export const OrderContextProvider: FC = () => {
    const {cart, shipping } = useCart();
    const [order, setOrder] = useState<IOrderData[]>([]);

    const generateOrderId = () => {
        return ''
    }

    const createNewOrder = (customerInfo: ICustomer) => {
       const boughtItems = [...cart];
        const customer: ICustomer = {
            fullName: customerInfo.fullName,
            email: customerInfo.email,
            phoneNumer: customerInfo.phoneNumer,
            address: customerInfo.address
        };
        let updatedOrder: IOrderData = {
                boughtItems: boughtItems,
                customer: customer,
                paymentMethod: '',
                shippingMethod: shipping, 

        }
        setOrder([updatedOrder]);
        
    }

    return (
        <OrderContext.Provider
            value={{
                order: [],
                generateOrderId,
                createNewOrder
            }}>
        </OrderContext.Provider>
    )
}
