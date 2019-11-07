import config from '../config'
import TokenService from '../services/token-service'

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
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default ClubApiService