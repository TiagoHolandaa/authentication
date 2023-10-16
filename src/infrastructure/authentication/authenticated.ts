import * as React from 'react';
import { getCookie } from '../manageCookie/getCookie';

const authenticated = () => {
    const [token, setToken] = React.useState("")

    React.useEffect(() => {
        const recoveredToken = getCookie('token');

        if (recoveredToken) {
            setToken(JSON.parse(recoveredToken));
        }

    }, []);

    return token
}

export default authenticated;