import React, { Component } from 'react'
import SignupForm from '../SignupForm/SignupForm'
import ClubSearchBar from '../ClubSearchBar/ClubSearchBar'
import './Homepage.css'

export default class Homepage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Cover to Cover</h1>
                    <h2>Read a book. Discuss a book.</h2>
                    
                    <ClubSearchBar />
                </header>

                <section>
                    <p>Looking for a few good reads? We can help with that.</p>
                    <p>At Cover to Cover you can find any number of online book clubs to join. We've got mystery clubs, and romance clubs, and all-lady clubs, and LGBTQ clubs, and much much more.</p>
                    <p>If you can't find whst you're looking for, start your own club. Whether it's public or private, you'll be discussing books with new and old friends in no time.</p>
                </section>

                <section>
                    <h3>Start Reading Now</h3>

                    <SignupForm />
                </section>
            </>
        )
    }
}