import React from 'react';

import { connect } from 'react-redux';

import { setUsername, setPass } from '../../redux/user/user.actions';
import { setRepo } from '../../redux/commit/commit.actions';



const CustomInput = ({ label, state, setPass, setUsername, setRepo, ...others }) => (
    <div>
        <label >
            <span className="font-weight-bold">{label}</span>
            <input onChange={(e) => handle_state(e, state, setPass, setUsername, setRepo)}
                className="form-control mt-2" placeholder={`your ${label}`} {...others} />
        </label>
    </div>
);

const handle_state = (e, state, setPass, setUsername, setRepo) => {
    const value = e.target.value
    switch (state) {
        case 'username':
            setUsername(value)
            break;
        case 'pass':
            setPass(value)
            break;
        case 'repo':
            setRepo(value)
            break;

        default:
            break;
    }
}

const mapDispatchToProps = (dispatch) => ({
    setUsername: username => dispatch(setUsername(username)),
    setPass: pass => dispatch(setPass(pass)),
    setRepo: repo => dispatch(setRepo(repo))
})

export default connect(null, mapDispatchToProps)(CustomInput);