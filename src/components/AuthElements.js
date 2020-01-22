import React from 'react';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/core/styles';
import Avatar from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const AuthElements = function(props){
    
    const loginButton = () => {
        if(false) return(
            [<Avatar src={props.photoURL} />, <IconButton color="inherit" onClick={this.logout}><ExitToApp/></IconButton>]
        );
        
        return(
            <Button variant="contained" onClick={props.login}>
                    Iniciar sesión con Google
            </Button>
        );
    }
    
    return(
            <div className={props.classes.container}> 
                {loginButton()}
            </div>
        );
}

export default withStyles({
     container:{
         display: 'flex',
         flexDirection:'row'
     }
 })(AuthElements);