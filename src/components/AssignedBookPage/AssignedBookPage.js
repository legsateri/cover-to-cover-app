import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import book from '../../images/book-cover.jpg'
import './AssignedBookPage.css'

export default class AssignedBookPage extends Component {
    render() {
        return (
            <>
                <header>
                    <img src={book} alt='Book' />
                    <p>A groundbreaking appriach to transforming traumatic legacies passed down in families over generations, by an acclaimed expert in the field.</p>
                </header>

                <section>
                    <h2>Chapter Comments</h2>
                    <p> 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15</p>

                    <h3>Chapter 2:</h3>
                    {/* TODO: Set up real functionality. */}
                    <Link to='/add-comment'><button>Add Comment</button></Link>

                    <p>I would never have thought a great grandmother's experience would still cause trauma to her great granddaughter. <span>T-Money</span></p>
                    <p>I definitely think a relative's experience during the Holocause could emotionally effect the family through the generations. But does anyone else think that the language she was using to describe her anxiety was coincidental? I use similar words to describe mine and no one in my family had that experience. I think the point he's trying to make is valid but his evidence doesn't hold the weight he wants it to. <span>LeggyRo</span></p>
                </section>
            </>
        )
    }
}