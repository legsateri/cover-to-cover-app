import React, { Component } from 'react'
import ClubListContext from '../contexts/ClubListContext'
import ClubApiService from '../services/club-api-service'
import { Section } from '../components/Utils/Utils'
import ClubListItem from '../components/ClubListItem/ClubListItem'

export default class ClubList extends Component {
    static contextType = ClubListContext

    componentDidMount() {
        this.context.clearError()
        ClubApiService.getClubs()
            .then(this.context.setClubList)
            .catch(this.context.setError)
    }

    renderClubs() {
        const { clubList = [] } = this.context
        return clubList.map(club => 
            <ClubListItem
                key={club.id}
                club={club}
            />
        )
    }

    render() {
        const {error} = this.context

        return (
            <Section list className='club_list_page'>
                {error
                    ? <p>Something went wrong. Try again, please.</p>
                    : this.renderClubs()
                }
            </Section>
        )
    }
}