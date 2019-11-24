////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
////////////////////////////////////////////////////////////////////////////////

class NotFoundPage extends Component {
    render() {
        return (
            <>
                <header className='header margins'>
                    <h1 className='h1_size'>No More Pages Left To Turn</h1>
                    <p>Try going back, or click a link in the nav.</p>
                </header>
            </>
        )
    }
}

export default NotFoundPage