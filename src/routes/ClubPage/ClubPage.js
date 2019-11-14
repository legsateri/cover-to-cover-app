////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import ClubListItem from '../../components/ClubListItem/ClubListItem';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService';
////////////////////////////////////////////////////////////////////////////////

// FIXME: Not working. Revisit and revise.
// FIXME: If possible, want this private not just to site members, but club members.

export default class ClubPage extends Component {
    static defaultProps = {
        match: { params: {} }
    }

    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            clubs: []
        }
    }

    static contextType = ClubContext

    componentDidMount() {
        const club_id = this.props.match.params.club_id
        this.context.clearError()

        BookClubApiService.getClub(club_id)
            .then(res => this.setState({ clubs: res }))

        BookClubApiService.getOtherUserComments(club_id)
            .then(res => this.setState({ comments: res }))
    }

    renderClubInfo() {
        const selectedClubId = this.props.match.params.club_id
        const clubInfo = this.context.clubs.filter(club => club.club_id === selectedClubId)
        const comments = this.context.comments.filter(comment => comment.club_id == selectedClubId)

        if (clubInfo.length) {
            return clubInfo.map(club => {
                const comment = comments.find(comment => comment.club_id === club.club_id)

                if (comment) {
                    return (
                        <div>
                            <ClubListItem key={club.club_id} {...club} />
                            {/* TODO: Make component that will render comments that have 
                            been posted <Comment key={comment.comment_id} {...comment} /> */}
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <ClubListItem key={club.club_id} {...club} />
                        </div>
                    )
                }
            })
        }
    }

    render() {
        const { error } = this.context

        return (
            <>
                <div>
                    {error
                        ? <p>Error!</p>
                        : this.renderClubInfo()}

                    {/* TODO: Reading Next Input should go under club name, 
                    description, topic. */}

                    {/* TODO: Next Meeting Calendar should go under Reading Next */}

                    {/* TODO: Create comment form component shouldn't take up too much 
                    space and render between club info and posted comments will show  below. 
                    Youtube video comment style. */}

                    {/* TODO: Create sidebar component including member names, and 
                    possibly other clubs you're a member of. */}
                </div>
            </>
        )
    }
}