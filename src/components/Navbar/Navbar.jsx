import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography  } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import logo from '../../assets/KoalaLogo 2i.svg'
import useStyles from './styles'
const Navbar = () => { 
    const classes = useStyles();
    return (
        <>
             <AppBar position="fixed" className={classes.AppBar} color="inherit">   
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} color="in herit" >
                             <img src={logo  } alt="Ayobami.js " height="25px" className={classes.image } />
                             Ayobami.js
                        </Typography>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                                <IconButton aria-label="Show Cart Items" color="inherit">
                                    <Badge badgeContent={2} color="secondary">
                                         <ShoppingCart />
                                    </Badge>
                                </IconButton>

                        </div>
                    </Toolbar>
               

             </AppBar>
        </>
    )
}

export default Navbar
