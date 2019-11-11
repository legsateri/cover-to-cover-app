////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////

class ClubList extends Component {
    static contextType = ClubContext

    render() {
        const clubs = this.context.clubs.map(club => {
            return (
                <>
                    <li key={club.club_id}>
                        <h2>{club.name}</h2>
                        <h3>{club.description}</h3>

                        <Link to={`/clubs/${club.club_id}`}>
                            <button>View More</button>
                        </Link>
                    </li>
                </>
            )
        })

        return (
            <>
                <main>
                    <ul>{clubs}</ul>
                </main>
            </>
        )
    }
}

export default ClubList