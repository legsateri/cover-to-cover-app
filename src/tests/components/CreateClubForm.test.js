////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import CreateClubForm from '../../components/CreateClubForm/CreateClubForm';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <CreateClubForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});