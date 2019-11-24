////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import ClubListPage from '../../routes/ClubListPage/ClubListPage';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ClubListPage />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});