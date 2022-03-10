import * as React from 'react';
import { Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState, CSSProperties } from 'react';



function QuantityCounter() {
    const [quantity, setQuantity] = useState(0);

    return(
        <div style={iconsDivStyle}>
            <RemoveCircleIcon onClick={() => 
                quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1)}
            />
            <Typography>Antal {quantity}</Typography>
            <AddCircleIcon onClick={() => setQuantity(quantity + 1)}/>
        </div>
        
    )
}

const iconsDivStyle: CSSProperties = {
    marginTop: "10rem",
    display: "flex", 
    flexDirection: "row",
    justifyContent: "space-between",
    width: "8rem",

}

export default QuantityCounter;

