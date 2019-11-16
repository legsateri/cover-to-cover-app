////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import UpdateBook from '../../components/UpdateBook/UpdateBook';
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import TokenService from '../../services/TokenService';
////////////////////////////////////////////////////////////////////////////////
import config from '../../config';
import './ClubPage.css';
////////////////////////////////////////////////////////////////////////////////

// TODO: If possible, want this private not just to site members, but club members.

export default class ClubPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: { push: () => { } }
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
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const clubs = this.state.clubs

        return (
            <>
                <header className="header">
                    <h1>{clubs.name}</h1>
                    <p>{clubs.description}</p>
                    <p>Topic: {clubs.topic}</p>
                </header>

                <div className='reading'>
                    <h2>{clubs.currently_reading}</h2>
                    <UpdateBook />
                </div>

                <div>
                    <h3>Commentary</h3>
                    <CreateCommentForm />
                </div>

                <div>
                    {/* TODO: Next Meeting Calendar should go under Reading Next */}

                    {/* TODO: Posted comments will show  below the form. Youtube video 
                    comment style. */}

                    {/* TODO: Create sidebar component including member names, and 
                    possibly other clubs you're a member of, maybe put topic in there 
                    instead of the main section. */}
                </div>
            </>
        )
    }
}