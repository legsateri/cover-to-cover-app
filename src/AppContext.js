import React from 'react'

const AppContext = React.createContext({
    clubs: [],
    comments: [],
    addClub: () => { },
    addComment: () => { },
    deleteClub: () => { },
    deleteComment: () => { },
    updateClub: () => { }
})

export default AppContext;