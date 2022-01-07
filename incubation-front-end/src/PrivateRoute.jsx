import {Route} from 'react-router-dom'

import React from 'react'

const PrivateRoute = ({children,...rest}) => {
    console.log("Private route working");
    return (
        
            <Route {...rest} >{children}</Route>
        
    )
}

export default PrivateRoute;
