import React, { Component } from 'react'
import './AccountPage.css'

export default class AccountPage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Welcome to your account!</h1>
                </header>

                <section>
                    <p>[Placeholder to upload picture]</p>
                    <h2>Allegra Pusateri</h2>
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