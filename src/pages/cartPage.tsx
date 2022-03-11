

import { Button, Typography } from "@mui/material";
import React, { CSSProperties } from "react";
import CartItemCard from "../components/cartItemCard";



function CartPage() {
    return(
        <div style={rootStyle}>
            <Typography align="center" variant="h4">Shopping Cart</Typography>
            <CartItemCard/>
            <CartItemCard/>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Button sx={{backgroundColor: "green"}} variant="contained">GO TO PAYMENT</Button>
                <Typography variant="h6">
                    Total:
                </Typography>
                <Typography variant="h6">
                    Kr
                </Typography>
            </div>

        </div>
        
        
        
    )
}

const rootStyle: CSSProperties = {
    marginTop: "4rem",
}

export default CartPage;