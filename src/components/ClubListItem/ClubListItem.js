////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Not working. Revisit and revise.

export default class ClubListItem extends Component {
    render() {
        const { club } = this.props

        return (
            <Link fo={`/clubs/${club.club_id}`}>
                <h1>{club.name}</h1>
                <p>{club.description}</p>
            </Link>
        )
    }
}