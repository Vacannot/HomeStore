import * as React from 'react';
import { Button, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState, CSSProperties } from 'react';



function QuantityCounter() {
    const [quantity, setQuantity] = useState(1);
    const [disabled, setDisabled] = useState();
    

    const handleOnReduce = () => {
        // quantity === 1 ? setQuantity(1) : 
        if (quantity === 1) {
            setQuantity(1);
            setDisabled(disabled);
        }
        
        setQuantity(quantity - 1);
    }

    const handleOnAdd = () => {
        setDisabled(undefined);
        setQuantity(quantity + 1)
    }

    return(
        <div style={iconsDivStyle}>
            <Button {...disabled}>
                <RemoveCircleIcon onClick={handleOnReduce} />
            </Button>
            <Typography>Antal {quantity}</Typography>
            <AddCircleIcon onClick={handleOnAdd}/>
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

