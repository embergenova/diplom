import { api } from '../../utils/axios'
const statePeople={
    people:{
        id:'',
        name:'',
        profile_path:[]
    },
    page:1,
    totalPeople:1
}
const mutationsPeople={
    SET_PEOPLE(state,payload){
        state.people=payload
    },
    SET_DECR_PAGES(state){
        state.page--
    },
    SET_INCR_PAGES(state) {
        state.page++
    },
    SET_TOTAL_PEOPLE(state, payload) {
        state.totalPeople = payload
    },
    SET_PAGES(state, payload) {
        state.page = payload
    },
    }
const gettersPeople={
    getPeople:state=>state.people,
    getPage:state=>state.page,
    getTotalPeople: state => state.totalPeople,
}
const actionsPeople={
    fetchPeople({commit,state}){
        api.get(`/3/person/popular?language=en-US&page=${state.page}`)
        .then(({data})=>{
            console.log(data);
         commit('SET_PEOPLE',data.results)
         commit('SET_TOTAL_PEOPLE', data.total_pages)
         commit('SET_PAGE', data.page)
        })
        .catch(err=>{
         alert(err)
        })
    }
}
export{statePeople,mutationsPeople,actionsPeople,gettersPeople}