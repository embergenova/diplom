import { api } from '../../utils/axios'
const stateAuth={
   token:'',
   user:{
       id:'',
       username:"",
       email:"",
       firstName:"",
       lastName:"",
       gender:"",
       image:"",
       token:""
   }
}
const gettersAuth={
   isAuthenticated:state =>state.token,
   getUser:state =>state.user
}
const mutationsAuth={
   SET_TOKEN(state,payload){
       state.token=payload
   },
   SET_USER(state,payload){
       state.user=payload
   }
}

const actionsAuth={
   auth({commit},value){
       api.post(`/3/account/${20150133}`,options)
         .then(({data}) => {
            console.log(data);
           commit('SET_TOKEN',data.token)
           commit('SET_USER',{...data, token:''})

           setCookie('token', data.token, {expires:1})

           router.push('/')

           localStorage.setItem('user',JSON.stringify({...data, token:''}))
         })
         .catch(({response}) => {
           alert(`Произошла ошибка ${response.data.message}`);
         });
   }
}
export {stateAuth,gettersAuth,mutationsAuth,actionsAuth}