import React, { Component } from 'react'
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

                        <label for='topic'>Topic</label>
                        <input type='text' name='topic' className='topic' required />

                        <label for="club-location">Location</label>
                        <select>
                            <option value='Choose One'>Choose One</option>
                            <option value='Online'>Online</option>
                            <option value='Not Online'>Not Online</option>
                        </select> 
                        
                        <br />

                        <input 
                            type="text" 
                            name="club-location" 
                            className="location" 
                            placeholder=' City' 
                            required 
                        />

                        <label for="club-type">Club Type</label>
                        <select>
                            <option value='Choose One'>Choose One</option>
                            <option value='Private'>Private</option>
                            <option value='Public'>Public</option>
                        </select>

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