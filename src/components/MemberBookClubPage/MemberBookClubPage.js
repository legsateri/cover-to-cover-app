import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import book from '../../images/book-cover.jpg'
import './MemberBookClubPage.css'

export default class MemberBookClubPage extends Component {
    render() {
        return (
            <>
                <Sidebar />
                <header className='sidebar-spacing'>
                    <h1>UCWbLadies</h1>
                    <p>Four gals worked at the writing center. Now they read things.</p>
                </header>

                <section className='sidebar-spacing'>
                    <h2>We're Currently Reading</h2>
                    <img src={book} alt='Book' />

                    <p>Picked By: Abby Plante</p>
                    <Link to='/assigned-book'><button>View Book Details</button></Link>
                </section>

                <section className='sidebar-spacing'>
                    <h3>Next Meeting</h3>
                    <h4>October 17, 2019</h4>
                </section>

                <section className='sidebar-spacing'>
                    <h3>Next You're Reading:</h3>
                    <p>Tara needs to pick a book.</p>

                    <input type='text' name='search' className='search' required />
                    {/* TODO: Set up real functionality. */}
                    <Link to='/books'><button className='find-book'>Find A Book</button></Link>
                </section>

                <section className='sidebar-spacing'>
                    <h3>Based on your past choices, we recommend:</h3>
                    <ul className='flex'>
                        <li className='reco-books'>[Book Cover] 
                            <br />
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li className='reco-books'>[Book Cover] 
                            <br />
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li className='reco-books'>[Book Cover] 
                            <br />
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>
                    </ul>
                </section>
            </>
        )
    }
}