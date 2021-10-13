import {createStore} from 'redux'

const initial_value={
    date:[
        'react',
        'anguler'
    ]
}


function userInfo(state=initial_value,action){

    switch(action.type){
        case 'addUser':
            return {...state , date:[...state.date ,action.title]};
        default :
            return state;
    }

}

const store = createStore(userInfo)

export default store;