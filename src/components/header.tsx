import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/system';
import Search from './Search';


const theme = createTheme({
    palette: {
        background: "#BFD8D5"
    }
})


function Header() {
    return(
    <>
        <CssBaseline/>
            <AppBar >
                <Toolbar variant="regular" sx={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#BFD8D5"
                    }}>
                    
                    <MenuIcon />
                    <Search />
                    <div>
                        <FavoriteIcon />
                        <ShoppingCartIcon />
                    </div>
                </Toolbar>
            </AppBar>
    </>
        
    )
}

export default Header;