////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import CreateCommentForm from '../../components/CreateCommentForm/CreateCommentForm';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <CreateCommentForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});