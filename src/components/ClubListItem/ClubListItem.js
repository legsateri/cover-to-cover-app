import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClubListItem extends Component {
    render() {
        const { club } = this.props

        return (
            <Link to={`/club/${club.id}`} className='club_list_item'>
                <div className='club_details'>
                    <h2>{club.name}</h2>
                    <p>{truncate(club.description)}</p>
                </div>
            </Link>
        )
    }
}

function truncate(text) {
    const words = text.split(' ')

    if (words.length > 10) {
        return words.slice(0, 10).join(' ') + '...'
    }

    return text
}