////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Loading from '../Loading/Loading'
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
import AuthApiService from '../../services/AuthApiService';
////////////////////////////////////////////////////////////////////////////////

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    };

    state = {
        error: null,
        loading: null,
    };

    handleSubmitJwtAuth = e => {
        e.preventDefault()
        this.setState({
            error: null,
            loading: true
        })

        const { email, password } = e.target

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
            .then(res => {
                email.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
                this.setState({ loading: false })
            })
    };

    render() {
        const { error, loading } = this.state;

        return (
            <>
                <form className='login_form' onSubmit={this.handleSubmitJwtAuth}>
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>

                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name='email' id='email' />
                    <br />

                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name='password' id='password' />
                    <br />

                    <button type='submit'>
                        {(!loading)
                            ? 'Login'
                            : <Loading />}
                    </button>
                </form>
            </>
        );
    }
}

export default LoginForm;