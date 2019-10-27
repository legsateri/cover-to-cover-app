import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import book from '../../images/book-cover.jpg'
import './NotMemberBookClubPage.css'

export default class NotMemberBookClubPage extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <header className='sidebar-spacing'>
                    <h1>UCWbLadies</h1>
                    <p>Four gals worked at the writing center. Now they read things.</p>

                    {/* TODO: Will automatically send request to club members with account info. */}
                    {/* TODO: Want to replace button with success message upon click. */}
                    <button>Ask To Join</button>
                </header>

                <section className='sidebar-spacing'>
                    <h2>We're Currently Reading</h2>
                    <img src={book} alt='Book' />
                </section>
            </>
        )
    }
}