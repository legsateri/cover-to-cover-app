import React, { Component } from 'react'
import './AddCommentForm.css'

{/* TODO: Want this to be a popup modal not a new page. */}

export default class AddCommentForm extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Add A Comment</h1>
                </header>

                <section>
                    <form id='start-club'>
                        <label for='comment'>Your Thoughts</label>
                        <textarea class='comment' name='comment' rows='7' required></textarea>
                        
                        <br />

                        <label for='comment'>Page Number</label>
                        <textarea class='comment' name='comment' required></textarea>

                        <br />

                        {/* TODO: Set up real functionality. */}
                        <button type="submit">Add</button>
                    </form>
                </section>
            </>
        )
    }
}