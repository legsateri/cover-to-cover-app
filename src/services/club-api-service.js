import config from '../config'
import TokenServices from '../services/token-service'

const ClubApiService = {
    getClubs() {
        return fetch(`${config.API_ENDPOINT}/api/clubs`, {
            headers: {}
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getClub(clubId) {
        return fetch(`${config.API_ENDPOINT}/api/clubs/${clubId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getClubComments(bookId) {
        return fetch(`${config.API_ENDPOINT}/api/comments/`, {
            headers: {
                'authorization': `bearer ${TokenServices.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postComment(clubId, bookId, comment, memberId, pageNumber) {
        return fetch(`${config.API_ENDPOINT}/api/comments`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenServices.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                book_id: bookId,
                club_id: clubId,
                comment,
                member_id: memberId,
                pageNumber
            })
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ClubApiService