import React from 'react';

const AppContext = React.createContext({
    clubs: [],
    addClub: () => { },
    deleteClub: () => { },
    updateClub: () => { },
    clubComments: [],
    addClubComment: () => { },
    deleteClubComment: () => { },
    updateClubComment: () => { },
    bookComments: [],
    addBookComment: () => { },
    deleteBookComment: () => { },
    updateBookComment: () => { }
});

export default AppContext;