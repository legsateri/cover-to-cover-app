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

// TODO: Render user's name with the comment.
// TODO: Add ability to edit club description or topic.

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
            }),
            fetch(`${config.API_ENDPOINT}/comments`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${TokenService.getAuthToken()}`
                },
            })
        ])

            .then(([clubs, comments]) => {
                if (!clubs.ok) {
                    return clubs.json().then(e => Promise.reject(e));
                }
                if (!comments.ok) {
                    return comments.json().then(e => Promise.reject(e));
                }
                return Promise.all([
                    clubs.json(),
                    comments.json()
                ]);
            })
            .then(([clubsJson, commentsJson]) => {
                this.setState({
                    clubs: clubsJson,
                    comments: commentsJson
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const clubs = this.state.clubs

        const clubId = this.props.match.params.club_id
        const comments = this.state.comments
        const clubComments = []

        for (let i = 0; i < comments.length; i++) {
            if (clubId == comments[i].club_id) {
                clubComments.push(
                    <li className='comment_list' key={comments[i].comment_id}>
                        <div>
                            <p>{comments[i].comment} - {comments[i].user_id}</p>
                        </div>
                    </li>
                )
            }
        }

        const reverse = clubComments.reverse()

        return (
            <>
                <header className='header margins'>
                    <h1>{clubs.name}</h1>
                    <p>{clubs.description}</p>
                    <p>Topic: <br/> <span>{clubs.topic}</span></p>
                </header>

                <div className='reading margins'>
                    <p className='current_book'>Currently Reading:</p>
                    <h2>{clubs.currently_reading}</h2>
                    <UpdateBook />
                </div>

                <div className='comments margins'>
                    <h3>Commentary</h3>
                    <CreateCommentForm />

                    <h4>See What Others Are Saying:</h4>
                    {reverse}
                </div>
            </>
        )
    }
} 