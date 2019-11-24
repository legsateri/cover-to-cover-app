////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
import SignupForm from '../../components/SignupForm/SignupForm';
////////////////////////////////////////////////////////////////////////////////

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <SignupForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});