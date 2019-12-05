////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////
import CreateClubForm from '../../components/CreateClubForm/CreateClubForm';
////////////////////////////////////////////////////////////////////////////////
import ClubContext from '../../contexts/ClubContext';
////////////////////////////////////////////////////////////////////////////////
import './CreateClubPage.css'

class CreateClubPage extends Component {
    static defaultProps = {
        match: { params: {} },
        history: {
            push: () => { }
        }
    }

    static contextType = ClubContext;

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleCreateSuccess = createClub => {
        this.setState({clubs: this.clubs})
        this.props.history.push(`/clubs`);
    }

    render() {
        return (
            <>
                <header className='header margins'>
                    <h1 className='h1_size list_padding'>Start A Book Club</h1>
                </header>

                <CreateClubForm
                    onCreateSuccess={this.handleCreateSuccess}
                />

                <button className='margins back_button' onClick={this.props.history.goBack}>Back</button>
            </>
        )
    }
}

export default CreateClubPage;