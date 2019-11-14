////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
import './ClubListPage.css';
////////////////////////////////////////////////////////////////////////////////

export default class ClubListPage extends Component {
    static contextType = ClubContext

    constructor(props) {
        super(props)
        this.state = {
            clubs: []
        }
    }

    componentDidMount() {
        this.context.clearError()

        Promise.all([
            fetch(`${config.API_ENDPOINT}/clubs`)
        ])

            .then(([clubs]) => {
                if (!clubs.ok) {
                    return clubs.json().then(e => Promise.reject(e));
                }
                return Promise.all([
                    clubs.json()
                ]);
            })
            .then(([clubsJson]) => {
                this.setState({
                    clubs: clubsJson
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const clubs = this.state.clubs.map(club => {
            return (
                <>
                    <li key={club.club_id} className='prompt_list_item'>
                        <div>
                            <h2>{club.name}</h2>
                            <p>{club.description}</p>
                        </div>

                        <Link to={`/clubs/${club.club_id}`}>
                            {/* TODO: When clicked add user_id to whatever member column is empty until 
                            club has 5 people, then gray out the button and say the club is full. */}
                            <button>Join</button>
                        </Link>
                    </li>
                </>
            );
        });

        return (
            <>
                <main>
                    <header className="header">
                        <h1>Find A Club</h1>
                    </header>

                    <section>
                        <ul className='club_list'>{clubs}</ul>
                    </section>
                </main>
            </>
        );
    }
}