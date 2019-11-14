////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService'
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Not working. Revisit and revise.
// FIXME: If possible, want this private not just to site members, but club members.

export default class ClubPage extends Component {
    static defaultProps = {
        match: { params: {} }
    }

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            clubs: []
        }
    }

    static contextType = ClubContext

    componentDidMount() {
        const club_id = this.props.match.params.club_id
        this.context.clearError()

        console.log(club_id)

        Promise.all([
            fetch(`${config.API_ENDPOINT}/clubs/${club_id}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                },
            })
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
                console.log(this.state.clubs);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const clubs = this.state.clubs
        console.log(clubs)

        return (
            <>
                <header className="header">
                    <h1>{clubs.name}</h1>
                    <p>{clubs.description}</p>
                    <p>Topic: {clubs.topic}</p>
                </header>

                <div>
                    {/* TODO: Reading Next Input should go under club name, 
                    description, topic. */}

                    {/* TODO: Next Meeting Calendar should go under Reading Next */}

                    {/* TODO: Create comment form component shouldn't take up too much 
                    space and render between club info and posted comments will show  below. 
                    Youtube video comment style. */}

                    {/* TODO: Create sidebar component including member names, and 
                    possibly other clubs you're a member of. */}
                </div>
            </>
        )
    }
}