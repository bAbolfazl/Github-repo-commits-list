import React from 'react';
import { Link } from 'react-router-dom';

import { BtnS } from './logoutBtn.styles';

const LogoutBtn = () => {
    return (
        <div>
            <Link to='/login'>
                <BtnS className="btn">
                    logOut
            </BtnS>
            </Link>
        </div>
    );
};

export default LogoutBtn;