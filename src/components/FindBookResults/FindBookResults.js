import React, { Component } from 'react'

// TODO: Maybe add a search bar to page to execute new search.

export default class Results extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>How about one of these?</h1>
                    <h2>Maybe your club should read one of these books next month.</h2>
                </header>

                <section>
                    <ul>
                        <li>
                            <h3>Book One by Whose It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Two by What's It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Three by How's It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Four by Where's It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Five by When's It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Six by Why's It</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Seven by Then There</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Eight by That They</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Nine by Their They're</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>

                        <li>
                            <h3>Book Ten by Dooby Doo</h3>
                            <p>Description description description description description description description.</p>
                            {/* TODO: Set up real functionality. */}
                            <button>Assign</button>
                        </li>
                    </ul>

                    {/* TODO: Will load more books. */}
                    <p>See More</p>
                </section>
            </>
        )
    }
}