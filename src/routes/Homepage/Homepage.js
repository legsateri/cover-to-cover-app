////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
////////////////////////////////////////////////////////////////////////////////

export default class Homepage extends Component {
    render() {
        return (
            <>
                <header className='header margins homepage'>
                    <h1 className='h1_size line_height'>Cover to Cover</h1>
                    <h2 className='h2_size'>read a book. discuss a book.</h2>
                    <Link to='/clubs' className='link_style' style={{ textDecoration: 'none' }}><p className='home_hyperlink'>find a book club ></p></Link>
                </header>

                <section className='homepage_body margins'>
                    <p className='home_p'>Looking for fellow book lovers? We can help with that.</p>
                    <p className='home_p'>At Cover to Cover we take we make book clubbing as easy. All you have to do is find one to join. Can't find one that interests you? Start one yourself. </p>
                    <p className='home_p'>Anyone with account can join or start a club. You can also add a book for the club to read, and contribute to the conversation in the comments.</p>
                </section>
            </>
        )
    }
}