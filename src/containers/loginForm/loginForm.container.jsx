import React from 'react';

import { Link } from 'react-router-dom';

import CustomInput from '../../components/customInput/customInput.component';

const LoginForm = () => {
    return (
        <div className="text-center">
            NOTE: Plese Enter "BAbolfazl"
            <CustomInput  type='text' label="Github username" state='username' />
            <Link to='/password'>
                <button className="btn btn-primary w-50 mt-4">next</button>
            </Link>
        </div>
    );
};

export default LoginForm;