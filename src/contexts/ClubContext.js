////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////

const ClubContext = React.createContext({
    query: [],
    clubResults: [],
    clubs: [],
    clubComments: [],
    error: null,
    setQuery: () => { },
    clearQuery: () => { },
    setClubResults: () => { },
    clearClubResults: () => { },
    setError: () => { },
    clearError: () => { },
    addClub: () => { },
    deleteClub: () => { },
    updateClub: () => { },
    addClubComment: () => { },
    deleteClubComment: () => { },
    updateClubComment: () => { },
})

export default ClubContext;


export class ClubProvider extends Component {
    state = {
        query: [],
        clubResults: [],
        clubs: [],
        clubComments: [],
        error: null,
    };

    setQuery = (query) => {
        this.setState({ query }, () => {
            BookClubApiService.getClub(query)
                .then(this.setClubResults)
                .catch(this.setError)
        })
    }

    clearQuery = (query) => {
        this.setState({ query: [] })
    }

    setClubResults = clubResults => {
        this.setState({ clubResults })
    }

    clearClubResults = () => {
        this.setState({ clubResults: [] })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    addClub = club => {
        this.setState({
            clubs: [...this.state.clubs, club],
        })
    }

    setClubComments = userComments => {
        this.setState({ userComments })
    }

    addClubComment = userComment => {
        this.setState({
            userComments: [...this.state.userComments, userComment],
        })
    }

    deleteClubComment = userCommentId => {
        const newUserComments = this.state.userComments.filter(userComment =>
            userComment.id !== userCommentId
        )
        this.setState({
            userComments: newUserComments
        })
    }

    updateClubComment = newComment => {
        this.setState({
            clubComments: this.state.clubComments.map(review =>
                (review.club_id !== newComment.club_id) ? comment : newComment
            )
        })
    }

    render() {
        const value = {
            query: this.state.query,
            setQuery: this.setQuery,
            clearQuery: this.clearQuery,
            clubResults: this.state.clubResults,
            setClubResults: this.setClubResults,
            clearClubResults: this.clearClubResults,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            clubs: this.state.clubs,
            clubComments: this.state.clubComments,
            addClub: this.addClub,
            setClubComments: this.setClubComments,
            addClubComment: this.addClubComment,
            deleteClubComment: this.deleteClubComment,
            updateClubComment: this.updateClubComment,
        }

        return (
            <ClubContext.Provider value={value}>
                {this.props.children}
            </ClubContext.Provider>
        )
    }
}
