import {api} from '../../utils/axios'

const stateMain = {
    films: [],
    page: 1,
    totalPage: 1,
    fetchType: 'popular',
    search: ''
}
const mutationsMain = {
    SET_FILMS(state, payload) {
        state.films = payload
    },
    SET_TOTAL_PAGE(state, payload) {
        state.totalPage = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    },
    SET_INCR_PAGE(state) {
        state.page++
    },
    SET_DECR_PAGE(state) {
        state.page--
    },
    SET_FETCH_TYPE(state, payload) {
        state.fetchType = payload
    },
    SET_SEARCH(state, payload) {
        state.search = payload
    }
}
const gettersMain = {
    getFilms: state => state.films,
    getPage: state => state.page,
    getTotal: state => state.totalPage,
    getFetchType: state => state.fetchType,
    getSearch: state => state.search
}
const actionsMain = {
    fetchMovies({commit, state}) {
        api.get(`/3/movie/popular?language=en-US&page=${state.page}`)
            .then(({data}) => {
                console.log(data);
                commit('SET_FILMS', data.results)
                commit('SET_TOTAL_PAGE', data.total_pages)
                commit('SET_PAGE', data.page)
                commit('SET_FETCH_TYPE', 'popular')
            })
            .catch(err => {
                alert(err)
            })

    },
    SearchFilm({commit, state}, name) {
        api.get(`/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${state.page}`)
            .then(({data}) => {
                console.log(data);
                commit('SET_FILMS', data.results)
                commit('SET_TOTAL_PAGE', data.total_pages)
                commit('SET_PAGE', data.page)
                commit('SET_FETCH_TYPE', 'search')
            })
            .catch(err => {
                alert(err)
            })
    },
}
export {stateMain, mutationsMain, actionsMain, gettersMain}