

import { makeStyles, Button, Typography, useTheme, Theme } from "@mui/material";
import React, { CSSProperties } from "react";
import CartItemCard from "../components/CartItemCard";
import useMediaQuery from '@mui/material/useMediaQuery';

// declare module '@mui/material/styles' {
//     interface useStyles {
//         pagetitle: {
//             fontSize: string,
//         }
//     }
// }

// const useStyles = makeStyles((theme: Theme) => ({
//     pageTitle: {
//         fontSize: "1.5rem",
//         [theme.breakpoints.up('sm')]: {
//             fontSize: "2rem",
//         }
//     }
// }))


function CartPage() {
    // const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

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