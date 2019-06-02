import {FETCH_ADMIN_START,
    FETCH_ADMIN_SUCCESS,
    FETCH_ADMIN_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCHING,
    LOGIN_FAILURE


} from '../actions/actions'

const initialstate ={

    fetchingAdmin: false,

    admin: [
    ],
    loggingIn: false,
    isfetching:false,
    error: null

};

export const adminReducer = (state = initialstate, action) =>{

    switch (action.type){
        case FETCH_ADMIN_START:
            return{
                ...state,
                err: '',
                fetchingAdmin: true
            }
        case FETCH_ADMIN_SUCCESS:
            return{
                ...state,
                err: '',
                isfetching: false,
                admin: action.payload
            }
        case LOGIN_FETCHING:
            return{
                ...state,
                loggingIn: false,
                isfetching: true,
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loggingIn: true,
                isfetching: false,
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                loggingIn:false,
                isfetching: false,
                err: 'ooops'
            }
        case FETCH_ADMIN_FAILURE:
        default:
            return state;


    }




}