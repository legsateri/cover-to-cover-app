////////////////////////////////////////////////////////////////////////////////
import config from '../config'
import TokenService from './TokenService'
////////////////////////////////////////////////////////////////////////////////

const BookClubApiService = {
    postClub(club) {
        return fetch(`${config.API_ENDPOINT}/clubs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(club)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteClub(club_id, callback) {
        return fetch(`${config.API_ENDPOINT}/clubs/${club_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(data => {
                callback(club_id)
            })
            .catch(error => {
                console.error(error)
            })
    },

    updateClub(newClub, club_id) {
        return fetch(`${config.API_ENDPOINT}/clubs/${club_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newClub),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
            })
    },

    postComment(userComment) {
        return fetch(`${config.API_ENDPOINT}/comments`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(userComment),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deteleComment(comment_id, callback) {
        return fetch(`${config.API_ENDPOINT}/comments/${comment_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(data => {
                callback(comment_id)
            })
            .catch(error => {
                console.error(error)
            })
    },

    updateComment(newComment, comment_id) {
        return fetch(`${config.API_ENDPOINT}/comments/${comment_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newComment),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
            })
    },

    getComment(comment_id) {
        return fetch(`${config.API_ENDPOINT}/comments/${comment_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getOtherUserComments(club_id) {
        return fetch(`${config.API_ENDPOINT}/comments/clubs/${club_id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default BookClubApiService;