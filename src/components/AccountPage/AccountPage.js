import React, { Component } from 'react'
import me from '../../images/me.jpeg'
import './AccountPage.css'

export default class AccountPage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Welcome to your account!</h1>
                </header>

                <section>
                    <h2>Allegra Pusateri</h2>
                    <img src={me} alt='Me' />

                    <br />

                    <button>Upload</button>

                    <p>writerlegs@gmail.com</p>
                </section>

                <section>
                    <h3>Your Clubs</h3>

                    <ul>
                        <li>UCWbLadies</li>
                    </ul>
                </section>
            </>
        )
    }
}