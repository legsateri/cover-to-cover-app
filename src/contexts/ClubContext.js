////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import config from '../config'
////////////////////////////////////////////////////////////////////////////////

const ClubContext = React.createContext({
    clubs: [],
    comments: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setClub: () => { },
    clearClub: () => { },
    addClub: () => { },
    deleteClub: () => { },
    updateClub: () => { },
    setComments: () => { },
    addComment: () => { },
    deleteComment: () => { },
    updateComment: () => { },
})

export default ClubContext;


export class ClubProvider extends Component {
    state = {
        clubs: [],
        comments: [],
        error: null,
    };

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setClub = club => {
        this.setState({ club })
    }

    addClub = club => {
        this.setState({
            clubs: [...this.state.clubs, club],
        })
    }

    deleteClub = clubId => {
        const newClub = this.state.clubs.filter(club =>
            club.club_id !== clubId
        )
        this.setState({
            clubs: newClub
        })
    }

    updateClub = newClub => {
        this.setState({
            clubs: this.state.clubs.map(club =>
                (club.club_id !== newClub.club_id) ? club : newClub
            )
        })
    }

    setComments = comments => {
        this.setState({ comments })
    }

    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    deleteComment = commentId => {
        const newComment = this.state.comments.filter(comment =>
            comment.comment_id !== commentId
        )
        this.setState({
            comments: newComment
        })
    }

    updateComment = newComment => {
        this.setState({
            comments: this.state.comments.map(comment =>
                (comment.club_id !== newComment.club_id) ? comment : newComment
            )
        })
    }

    render() {
        const value = {
            club: this.state.club,
            clubs: this.state.clubs,
            comments: this.state.comments,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setClub: this.setClub,
            clearClub: this.clearClub,
            addClub: this.addClub,
            deleteClub: this.deleteClub,
            updateClub: this.updateClub,
            setComments: this.setComments,
            addComment: this.addComment,
            deleteComment: this.deleteComment,
            updateComment: this.updateComment,
        }

        return (
            <ClubContext.Provider value={value}>
                {this.props.children}
            </ClubContext.Provider>
        )
    }
}