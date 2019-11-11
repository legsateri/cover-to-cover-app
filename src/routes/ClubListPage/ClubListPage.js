////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ClubList from '../../components/ClubList/ClubList';
////////////////////////////////////////////////////////////////////////////////

class ClubListPage extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <h1>Find A Book Club</h1>
                </header>

                <ClubList/>
            </>
        )
    }
}

export default ClubListPage;