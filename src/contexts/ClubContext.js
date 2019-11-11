////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////

export const nullClub = {
    club: []
}

const ClubContext = React.createContext({
    club: nullClub,
    userComments: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setClub: () => { },
    clearClub: () => { },
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
        club: nullClub,
        error: null
    }

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

    setUserComments = userComments => {
        this.setState({ userComments })
    }

    clearClub = () => {
        this.setClub(nullClub)
        this.setUserComments([])
    }

    addClub = club => {
        this.setState({
            club: [...this.state.club, club],
        })
    }

    deleteClub = clubId => {
        const newClubs = this.state.club.filter(club =>
            club.id !== clubId
        )
        this.setState({
            club: newClubs
        })
    }

    updateClub = newClub => {
        this.setState({
            club: this.state.club.map(club =>
                (club.club_id !== newClub.club_id) ? club : newClub
            )
        })
    }

    addUserComment = userComment => {
        this.setUserComments([
            ...this.state.userComments,
            userComment
        ])
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
            club: this.state.club,
            userComments: this.state.userComments,
            error: this.state.error,
            setError: this.state.setError,
            clearError: this.state.clearError,
            setClub: this.state.setClub,
            clearClub: this.state.clearClub,
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