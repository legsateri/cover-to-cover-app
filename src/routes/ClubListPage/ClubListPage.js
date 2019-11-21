////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
import './ClubListPage.css';
////////////////////////////////////////////////////////////////////////////////

// TODO: Make it so join actually works (PATCH)

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

    updateClubList() {
        this.setState({clubs: this.clubs})
    }

    render() {
        console.log(this.state)
        const clubs = this.state.clubs.map(club => {
            return (
                <>
                    <li key={club.club_id} className='club_list'>
                        <div>
                            <h2 className='h2_list_size'>{club.name}</h2>
                            <p>{club.description}</p>
                        </div>

                        <Link to={`/clubs/${club.club_id}`}>
                            <button className='join_button'>Join</button>
                        </Link>
                    </li>
                </>
            );
        });

        return (
            <>
                <main>
                    <header className='header margins'>
                        <h1 className='h1_size line_height list_padding'>Find A Club</h1>
                    </header>

                    <section className='margins'>
                        {clubs}
                    </section>
                </main>
            </>
        );
    }
}