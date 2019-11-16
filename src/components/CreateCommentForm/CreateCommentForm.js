////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import BookClubApiService from '../../services/BookClubApiService'
////////////////////////////////////////////////////////////////////////////////

class CreateCommentForm extends Component {
    static defaultProps = {
        match: { params: {} },
        onCommentSuccess: () => { }
    }

    static contextType = ClubContext

    constructor(props) {
        super(props)
        this.state = {
            comment: {
                comment_id: null,
                textArea: '',
                club_id: null,
            }
        }
    }

    handleChangeComment = e => {
        const commentIndex = this.context.comments.length.toString();
        
        this.setState({
            comment: {
                comment_id: commentIndex,
                textArea: e.target.value,
                club_id: this.state.comment.club_id,
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const commentId = parseInt(this.context.comments.length)

        const newComment = {
            comment_id: commentId,
            comment: this.state.comment.textArea,
            club_id: this.state.comment.club_id
        }

        BookClubApiService.postComment(newComment)
            .then(() => {
                this.props.onCommentSuccess()
            })
            .catch(this.context.setError)

        this.setState({
            comment: {
                comment_id: null,
                textArea: '',
                club_id: null,
            }
        })
    }

    handleClubId() {
        let currentPath = window.location.pathname
        let clubId = currentPath.match(/\d+/g).map(Number)
        const commentIndex = this.context.comments.length.toString()

        this.setState({
            comment: {
                comment_id: commentIndex,
                club_id: clubId[0],
                textArea: this.state.comment.textArea
            }
        })
    }

    render() {
        const { textArea } = this.state

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='description'>Add Comment:</label>
                    <br />
                    <textarea
                        className='description'
                        rows='4'
                        value={textArea}
                        onChange={this.handleChangeComment}
                        required
                    />
                    <br />

                    <button onClick={event => this.handleClubId(event)}>Add</button>
                    <br />
                </form>
            </>
        )
    }
}

export default withRouter(CreateCommentForm)