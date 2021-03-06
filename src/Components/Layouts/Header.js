import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function header(props){
    return(
    <div>
       <AppBar position="static">
        <Toolbar>
          {/* <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="headline" color="inherit" >
            Available Classes
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    )
};

export default header;