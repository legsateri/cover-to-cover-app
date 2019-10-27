import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

                    {/* TODO: Set up real functionality. */}
                    <button>Upload</button>
                </section>

                <section>
                    <h3>Your Clubs</h3>

                    <ul>
                        <Link to='/member-club'><li>UCWbLadies</li></Link>
                    </ul>
                </section>
            </>
        )
    }
}