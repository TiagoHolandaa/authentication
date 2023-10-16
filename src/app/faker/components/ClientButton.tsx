import * as React from 'react';

const ClientButton = ({onClick, children}: any) => {
    return ( <button onClick={onClick}>{children}</button> );
}
 
export default ClientButton;