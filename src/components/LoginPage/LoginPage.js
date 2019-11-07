import React from 'react'
import { Button, Input } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import SignupForm from '../SignupForm/SignupForm'

class LoginPage extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    constructor() {
        super();
        this.state = {
            form: "login",
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitJwtAuth = this.handleSubmitJwtAuth.bind(this)
    }


    handleChange(event) {
        this.setState({
            form: event.target.value
        })
    }

    handleSubmitJwtAuth(event) {
        event.preventDefault()
        this.setState({ error: null })
        const { email, password } = event.target

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
            })
            console.log('User is logged in!')
    }

    render() {
        const { error } = this.state
        let formOutput;

        if (this.state.form === "login") {
            formOutput =
                <>
                    <form
                        className='login_form'
                        onSubmit={this.handleSubmitJwtAuth}
                    >
                        <div role='alert'>
                            {error && <p>{error}</p>}
                        </div>

                        <label htmlFor="email">Email</label>
                        <Input type="text" name='email' id='email' />

                        <label htmlFor="password">Password</label>
                        <Input type="password" name='password' id='password' />

                        <br />

                        <Button type='submit'>Login</Button>
                    </form>
                </>
        } else {
            formOutput =
                <>
                    <SignupForm />
                </>
        }

        return (
            <>
                <main>
                    <header>
                        <h1>Start Reading</h1>
                        <form>
                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="login"
                                        checked={this.state.form === "login"}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Login
                                </label>
                            </div>

                            <div className="radio">
                                <label>
                                    <input
                                        type="radio"
                                        value="signup"
                                        checked={this.state.form === "signup"}
                                        onChange={this.handleChange}
                                        onClick={this.handleForms}
                                    />
                                    Signup
                                </label>
                            </div>
                        </form>
                    </header>

                    <section>
                        {formOutput}
                    </section>
                </main>
            </>
        );
    }
}

export default LoginPage;