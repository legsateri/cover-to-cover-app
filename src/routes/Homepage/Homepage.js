////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import './Homepage.css';
////////////////////////////////////////////////////////////////////////////////

export default class Homepage extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <h1>Cover to Cover</h1>
                    <h2>Read a book. Discuss a book.</h2>
                </header>

                <section>
                    <p>Looking for a few good reads? We can help with that.</p>
                    <p>At Cover to Cover you can find any number of online book clubs to join. We've got mystery clubs, romance clubs, all-lady clubs, LGBTQ clubs, and much much more.</p>
                    <p>If you can't find what you're looking for, start your own club. You'll be discussing books with new and old friends in no time.</p>
                </section>
            </>
        )
    }
}