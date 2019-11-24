////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import UpdateBook from '../../components/UpdateBook/UpdateBook';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <UpdateBook />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});