import React, { CSSProperties } from 'react'
import { ICartItem } from '../context/CartContext';
import { useCart } from '../context/CartContext'


interface Props {
    product: ICartItem
}

export const FinishedOrderInfoDiv = ({product}: Props) => {

    console.log(product)
    const {getSumPriceProducts} = useCart();
    const priceTotalPerProduct = getSumPriceProducts(product);
    

    return(
        <div style={rootStyle}>
            <p>{product.product.title}</p>
            <p>{product.quantity} st</p>
            <p>{product.product.price} kr st</p>
            <p>{priceTotalPerProduct} kr totalt</p>
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'beige',

}