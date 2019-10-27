import React from 'react';
import { Link } from 'react-router-dom'
import './SignupForm.css';

class SignupForm extends React.Component {
    render() {
        return (
            <>
                <form className='signup_form'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" name='first-name' id='first-name' />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" name='last-name' id='last-name' />

                    <label htmlFor="signupEmail">Email</label>
                    <input type="text" name='emsignupEmailail' id='signupEmail' />

                    <label htmlFor="signupPassword">Password</label>
                    <input type="signupPassword" name='signupPassword' id='signupPassword' />

                    <br />
                    
                    {/* TODO: Set up real functionality. */}
                    <Link to='/account'><button type='submit'>Sign Up</button></Link>
                </form>
            </>
        );
    }
}

export default SignupForm;