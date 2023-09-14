import {createStore} from 'vuex'
import {stateMain,mutationsMain,actionsMain,gettersMain} from '../modules/main/store'
import {stateDetails,mutationsDetails,actionsDetails,gettersDetails} from '../modules/details/store'
import {stateActor,mutationsActor,actionsActor,gettersActor} from '../modules/actor/store'
import {stateAuth,gettersAuth,mutationsAuth,actionsAuth} from '../modules/auth/store'
import {statePeople,mutationsPeople,actionsPeople,gettersPeople} from '../modules/people/store'
export default createStore({
    state:{
        ...stateMain,
        ...stateDetails,
        ...stateActor,
        ...stateAuth,
        ...statePeople
    },
    mutations:{
        ...mutationsMain,
        ...mutationsDetails,
        ...mutationsActor,
        ...mutationsAuth,
        ...mutationsPeople
    },
    actions:{
        ...actionsMain,
        ...actionsDetails,
        ...actionsActor,
        ...actionsAuth,
        ...actionsPeople
    },
    getters:{ 
        ...gettersMain,
        ...gettersDetails,
        ...gettersActor,
        ...gettersAuth,
        ...gettersPeople
    }
})