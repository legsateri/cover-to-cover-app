import React, { Component } from 'react'
import AppContext from '../../AppContext'
import './StartClubPage.css'

export default class StartClubPage extends Component {
    render() {
        return (
            <>
                <header>
                    <h1>Start A Book Club</h1>
                </header>

                <section>
                    <form id='start-club'>
                        <label for='club-name'>Book Club Name</label>
                        <input type='text' name='club-name' className='name' required />

                        <label for='description'>Description</label>
                        <textarea class='description' name='description' rows='7' required></textarea>

                        <label for="club-location">Location</label>
                        <label><input type="radio" name="club-location" className="radio" required />Online</label>
                        <label><input type="radio" name="club-location" className="radio" required />Not Online</label>
                        <input type="text" name="club-location" className="location" required />

                        <label for="club-type">Club Type</label>
                        <label><input type="radio" name="club-type" class="radio" required />Private</label>
                        <label><input type="radio" name="club-type" class="radio" required />Public</label>

                        <label for="club-members">Add Members (optional)</label>
                        <input type="text" name="club-members" class="name" />

                        <label for="club-max-members">Maximum Number of Members</label>
                        <input type="text" name="club-max-members" class="name" />

                        <br />

                        <button type="submit">Submit</button>
                    </form>
                </section>
            </>
        )
    }
}