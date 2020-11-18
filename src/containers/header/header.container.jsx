import React from 'react';

import LogoutBtn from '../../components/logoutBtn/logoutBtn.component';
import { HeaderS } from './header.styles';

const Header = () => {
    return (
        <HeaderS className="d-flex align-items-center justify-content-around py-4 mb-4">
            <h1>Github Commits List</h1>
            <LogoutBtn />
        </HeaderS>
    );
};

export default Header;