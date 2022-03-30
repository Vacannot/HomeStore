import * as React from 'react';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState, CSSProperties } from 'react';
import { ICartItem, useCart } from '../context/CartContext';

interface Props {
    product: ICartItem
}

function QuantityCounter({product}: Props) {
    const { addQuantity, reduceQuantity } = useCart();

    const handleOnClickReduce = () => {
        reduceQuantity(product) 
    }

    const handleOnClickAdd = () => {
        addQuantity(product);
    }

        return(
            <div style={iconsDivStyle}>
                <RemoveCircleIcon onClick={handleOnClickReduce}/>
                <Typography> Antal: {product.quantity}</Typography>
                <AddCircleIcon onClick={handleOnClickAdd}/>
            </div>
        )
}

    const iconsDivStyle: CSSProperties = {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between",
        width: "8rem",
    }


export default QuantityCounter;

