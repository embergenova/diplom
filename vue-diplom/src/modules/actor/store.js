import { api } from '../../utils/axios'
const stateActor={
    actor:{
        id:'',
        profile_path:[],
        name:''
    },
    images:{
        id:'',
        file_path:[]
    },
    film:{
        title:[]
    }

}
const mutationsActor={
    SET_ACTOR(state,value){
        state.actor=value
    },
    SET_IMAGES(state,value){
        state.images=value
    },
    SET_FILM(state,value){
        state.film=value
    }
}
const gettersActor={
    getActor:state=>state.actor,
    getImages:state=>state.images,
    getFilm:state=>state.film,
}
const actionsActor={
    fetchActor({commit},id){
        api.get(`/3/person/${id}?language=en-US`)
        .then(({data})=>{
            console.log(data);
         commit('SET_ACTOR',data)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchImages({commit},id){
        api.get(`/3/person/${id}/images`)
        .then(({data})=>{
            console.log(data);
         commit('SET_IMAGES',data.profiles)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchFilm({commit},id){
        api.get(`/3/person/${id}/movie_credits?language=en-US`)
        .then(({data})=>{
            console.log(data);
         commit('SET_FILM',data.cast)
        })
        .catch(err=>{
         alert(err)
        })
    },
}
export{stateActor,mutationsActor,actionsActor,gettersActor}