import React, { CSSProperties } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ClassNames } from '@emotion/react';
import stolar from '../assets/stolar.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia 
        component="img"
        height="260"
        image={stolar}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Två stolar
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          Två snygga stolar gjord i björk
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          299kr
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: 'right'}}>

      <IconButton sx={ButtonStyle} aria-label="favorite" size="large">
  <Favorite />
</IconButton>
    
    <IconButton sx={ButtonStyle} aria-label="add to shopping cart" size="large">
  <ShoppingCart />
</IconButton>
     
      </CardActions>
    </Card>
  );
}

const ButtonStyle: CSSProperties = {
  backgroundColor: "#BFD8D5"
  
}
