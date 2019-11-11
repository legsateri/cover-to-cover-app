////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////

const ClubListContext = React.createContext({
    clubList: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    setClubList: () => { },
})

export default ClubListContext

export class ClubListProvider extends Component {
    state = {
        clubList: [],
        error: null,
    };

    setClubList = clubList => {
        this.setState({ clubList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            clubList: this.state.clubList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setClubList: this.setClubList,
        }
        
        return (
            <ClubListContext.Provider value={value}>
                {this.props.children}
            </ClubListContext.Provider>
        )
    }
}