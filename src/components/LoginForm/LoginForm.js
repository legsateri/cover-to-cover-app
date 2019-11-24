////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Loading from '../Loading/Loading';
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
import AuthApiService from '../../services/AuthApiService';
////////////////////////////////////////////////////////////////////////////////
import './LoginForm.css'
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
            .then(() => {
                window.location.reload(false)
            })
    };

    render() {
        const { error, loading } = this.state;

        return (
            <>
                <form className='login_form margins' onSubmit={this.handleSubmitJwtAuth}>
                    <div role='alert'>
                        {error && <p>{error}</p>}
                    </div>

                    <label className='email_label' htmlFor='email'>Email</label>
                    <br />
                    <input type='text' name='email' id='email' className='email' />
                    <br />

                    <label className='password_label' htmlFor='password'>Password</label>
                    <br />
                    <input type='password' name='password' id='password' className='password' />
                    <br />

                    <button type='submit' className='submit_button'>
                        {(!loading)
                            ? 'Login'
                            : <Loading />}
                    </button>
                </form>

                <div className='margins login_demo'>
                    <p>Demo Email: test.user@email.com</p>
                    <p>Demo Password: TestUser1122##</p>
                </div>
            </>
        );
    }
}

export default LoginForm;