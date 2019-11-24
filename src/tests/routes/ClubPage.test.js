////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubPage from '../../routes/ClubPage/ClubPage';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ClubPage />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});