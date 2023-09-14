import { api } from '../../utils/axios'
const stateDetails={
    details:{
        id:'',
        title:'',
        overview:'',
        vote_average:'',
        poster_path:[],
        genres:[],
        production_companies:[],
        production_countries:[],
        release_date:'',
        runtime:'',
        budget:''
    },
    actors:{
        id:'',
        profile_path:[],
        name:''
    },
    image:{
        id:'',
        file_path:[]
        },
    recomen:{
        id:'',
        poster_path:[],
        title:''
    },
    simila:{
        id:'',
        poster_path:[],
        title:''
    },
    review:{
        id:'',
        url:[],
        content:'',
        author:'',
        created_at:''
    }

}
const mutationsDetails={
    SET_DETAILS(state,value){
        state.details=value
    },
    SET_ACTORS(state,value){
        state.actors=value
    },
    SET_IMAGE(state,value){
        state.image=value
    },
    SET_RECOMEN(state,value){
        state.recomen=value
    },
    SET_SIMILA(state,value){
        state.simila=value
    },
    SET_REVIEW(state,value){
        state.review=value
    },
}
const gettersDetails={
    getDetails:state=>state.details,
    getActors:state=>state.actors,
    getImage:state=>state.image,
    getRecomen:state=>state.recomen,
    getSimila:state=>state.simila,
    getReview:state=>state.review
}
const actionsDetails={
    fetchDetails({commit},id){
        api.get(`/3/movie/${id}?language=en-US`)
        .then(({data})=>{
         commit('SET_DETAILS',data)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchActors({commit},id){
        api.get(`/3/movie/${id}/credits?language=en-US`)
        .then(({data})=>{
         commit('SET_ACTORS',data.cast)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchImage({commit},id){
        api.get(`/3/movie/${id}/images`)
        .then(({data})=>{
         commit('SET_IMAGE',data.backdrops)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchRecomen({commit},id){
        api.get(`/3/movie/${id}/recommendations?language=en-US&page=1`)
        .then(({data})=>{
         commit('SET_RECOMEN',data.results)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchSimila({commit},id){
        api.get(`/3/movie/${id}/similar?language=en-US&page=1`)
        .then(({data})=>{
         commit('SET_SIMILA',data.results)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchReview({commit},id){
        api.get(`/3/movie/${id}/reviews?language=en-US&page=1`)
        .then(({data})=>{
            console.log(data);
         commit('SET_REVIEW',data.results)
        })
        .catch(err=>{
         alert(err)
        })
    },
}
export{stateDetails,mutationsDetails,actionsDetails,gettersDetails}