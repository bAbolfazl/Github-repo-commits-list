import React from 'react';

import { Link } from 'react-router-dom';
import CustomInput from '../../components/customInput/customInput.component';

const PasswordForm = () => {
    return (
        <div className="text-center">
            NORE: Doesn't matter
            <CustomInput type='password' label="Github password" state='pass' />
            <Link to='/repo'>
                <button className="btn btn-primary w-50 mt-4">login</button>
            </Link>
        </div>
    );
};

// const handle_login_click = () => {
//     const data = {
//         client_id: process.env.REACT_APP_CLIENT_ID,
//         redirect_uri: process.env.REACT_APP_REDIRECT_URI,
//         client_secret: process.env.client_secret,
//         scope: 'user',
//         // code: newUrl[1]
//     }
//     fetch('https://github.com/login/oauth/authorize', {
//         method: 'POST',
//         accept: 'application/json',
//         contentType: 'application/x-www-form-urlencoded', 
//         body: JSON.stringify(data)
//     })
//     .then(res=>res.json())
//     .then(console.log)
//     .catch(err=>console.log(err.message))
// }

export default PasswordForm;