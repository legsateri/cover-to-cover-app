////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ClubListItem from '../../components/ClubListItem/ClubListItem';
////////////////////////////////////////////////////////////////////////////////
import ClubListContext from '../../contexts/ClubListContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApService from '../../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////

// TODO: Not working. Revisit and revise.

export default class ClubListPage extends Component {
    static contextType = ClubListContext

    componentDidMount() {
        this.context.clearError()
        BookClubApService.getAllClubs()
            .then(this.context.setClubList)
            .catch(this.context.setError)
    }

    renderClubs() {
        const { clubList = [] } = this.context

        return clubList.map(club =>
            <ClubListItem
                key={club.club_id}
                club={club}
            />
        )
    }

    render() {
        const {error} = this.context

        return (
            <>
                <section>
                    {error
                        ? <p>There was an error, try again</p>
                        : this.renderClubs()}
                </section>
            </>
        )
    }
}