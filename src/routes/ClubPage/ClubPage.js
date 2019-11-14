////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import Loading from '../../components/Loading/Loading';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////

// TODO: Not working. Revisit and revise.

export default class ClubPage extends Component {
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = ClubContext

    componentDidMount() {
        const { club_id } = this.props.match.params
        this.context.clearError()

        BookClubApiService.getClub(club_id)
            .then(this.context.setClub)
            .catch(this.context.setError)

        console.log(this.context.setClub)

        BookClubApiService.getOtherUserComments(club_id)
            .then(this.context.setComments)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearClub()
    }

    renderClub() {
        const { club, comments } = this.context

        return (
            <>
                <h1>{club.name}</h1>
                <p>{club.description}</p>

                <ClubContent club={club} />
                <ClubComments comments={comments} />
                {/* TODO: Add Comment Form */}
            </>
        )
    }

    render() {
        const { error, club } = this.context

        let content

        if (error) {
            content = (error.error === `Club does not exist.`)
                ? <p>Club not found.</p>
                : <p>There was an error.</p>
        } else if (!club.club_id) {
            content = <Loading />
        } else {
            content = this.renderClub()
        }

        return (
            <section>
                {content}
            </section>
        )
    }
}

function ClubContent({ club }) {
    return (
        <>
            <p>{club.topic}</p>
            {/* TODO: Add in currently reading as an imported component */}
            {/* TODO: Add in next meeting as an imported component */}
        </>
    )
}

function ClubComments({ comments = [] }) {
    return (
        <>
            <ul>
                {comments.map(comment =>
                    <li key={comment.comment_id}>
                        <p>{comment.comment}</p>
                        <p>{comment.user.full_name}</p>
                    </li>
                )}
            </ul>
        </>
    )
}