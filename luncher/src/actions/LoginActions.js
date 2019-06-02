import axios from 'axios';

export const  FETCH_ADMIN_START = 'FETCH_ADMIN_START'
export const  FETCH_ADMIN_SUCCESS = 'FETCH_ADMIN_SUCCESS'
export const FETCH_ADMIN_FAILURE = 'FETCH_ADMIN_FAILURE'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const  LOGIN_FETCHING ='LOGIN_FETCHING'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'


export const loginSuccess = (user) => dispatch =>{
    dispatch({type: LOGIN_FETCHING})

    return axios.post(
        `https://luncher-backend.herokuapp.com/api/login`, user
    )
        .then(res =>{
            console.log(res
            )
            localStorage.setItem('token', res.data.payload)
            dispatch({
                type:LOGIN_SUCCESS,
                payload: res.data.payload,

            })
        })
        .catch(err =>{
            dispatch({
                type: LOGIN_FAILURE,
                payload: err

            })
        })



}


export const getAdmin = () => dispatch => {
    dispatch({type: FETCH_ADMIN_START})

    axios.get(
        `https://luncher-backend.herokuapp.com/api/admin`,
        {headers: {authorization:localStorage.getItem('token')}}
    )
        .then(res =>{
                console.log('res')
                dispatch({
                    type: FETCH_ADMIN_SUCCESS,
                    payload: res.data
                })
            }
        )
        .catch(err =>{

            dispatch ({
                type: FETCH_ADMIN_FAILURE,
                payload: err
            })
        })

}