////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////

const ClubContext = React.createContext({
    clubs: [],
    userComments: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setClub: () => { },
    addClub: () => { },
    deleteClub: () => { },
    updateClub: () => { },
    setUserComments: () => { },
    addUserComment: () => { },
    deleteUserComment: () => { },
    updateUserComment: () => { },
})

export default ClubContext;

export class ClubProvider extends Component {
    state = {
        clubs: [],
        userComments: [],
        error: null
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setClub = clubs => {
        this.setState({ clubs })
    }

    addClub = club => {
        this.setState({
            clubs: [...this.state.clubs, club],
        })
    }

    deleteClub = clubId => {
        const newClubs = this.state.clubs.filter(club =>
            club.id !== clubId
        )
        this.setState({
            clubs: newClubs
        })
    }

    updateClub = newClub => {
        this.setState({
            clubs: this.state.clubs.map(club =>
                (club.club_id !== newClub.club_id) ? club : newClub
            )
        })
    }

    setUserComments = userComments => {
        this.setState({ userComments })
    }

    addUserComment = userComment => {
        this.setState({
            userComments: [...this.state.userComments, userComment]
        })
    }

    deleteUserComment = userCommentId => {
        const newUserComments = this.state.userComments.filter(userComment =>
            userComment.id !== userCommentId
        )
        this.setState({
            userComments: newUserComments
        })
    }

    updateUserComment = newComment => {
        this.setState({
            userComments: this.state.userComments.map(comment =>
                (comment.club_id !== newComment.club_id) ? comment : newComment
            )
        })
    }

    render() {
        const value = {
            clubs: this.state.clubs,
            userComments: this.state.userComments,
            error: this.state.error,
            setError: this.state.setError,
            clearError: this.state.clearError,
            setClub: this.state.setClub,
            addClub: this.state.addClub,
            deleteClub: this.state.deleteClub,
            updateClub: this.state.updateClub,
            setUserComments: this.state.setUserComments,
            addUserComment: this.state.addUserComment,
            deleteUserComment: this.state.deleteUserComment,
            updateUserComment: this.state.updateUserComment,
        }

        return (
            <ClubContext.Provider value={value}>
                {this.props.children}
            </ClubContext.Provider>
        )
    }
}