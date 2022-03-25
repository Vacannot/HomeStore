import React, { createContext, FC, useContext, useState } from 'react';



interface ICustomer {
    fullName: string,
    email: string,
    phoneNumer: number,
    address: string,
}

interface IOrderData {
    customer: ICustomer;
    paymentMethod: string,

}

interface IOrderContextValue {
    order: IOrderData[],
    generateOrderId: () => string,
    getOrderInformation: (customerInfo: ICustomer) => void,
}

const OrderContext = createContext<IOrderContextValue>({
    order: [],
    generateOrderId: () => '',
    getOrderInformation: () => {},
})

export function useOrderContext() {
    return useContext(OrderContext);
}

export const OrderContextProvider: FC = (props) => {


    const generateOrderId = () => {
        return ''
    }

    const getOrderInformation = (customerInfo: ICustomer) => {
        
        return
    }

    return (
        <OrderContext.Provider
            value={{
                order: [],
                generateOrderId,
                getOrderInformation
            }}>
        </OrderContext.Provider>
    )
}
